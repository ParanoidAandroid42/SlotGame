
module Dev.Controller {

    import Listener = Enum.Listeners; 
    
    /** running like dictionary*/
    interface Machine<T> {
        [K: string]: T; 
    }
    
    export class MachineController extends PIXI.utils.EventEmitter{
        
        private _slotMachine: Machine<Modules.Machine> = {};
        private _machineType : Enum.MachineType;
        private _container:Core.Modules.Container;
        private _controlBar : Modules.ControlBar;
        private _winLines:Modules.Winlines;
        private _currentSpinButtonAction: Enum.SpinAction = Enum.SpinAction.StartSpin;
        private _currentMachineType : string;
        private _game:Core.Controller.GameController;

        /**
         * Creates an instance of slot machine controller.
         * @param slotMachineType -Information.SlotMachineType
         * @param container - parentContainer
         */
        public constructor(container:Core.Modules.Container) {
            super();
            this._machineType = Config.SlotConfig.MachineType;
            this._container = new Core.Modules.Container(0,40,container,"SlotMachineContainer");
            this._game = GameController.Instance;
            this.initProperties();
        }

        private initProperties():void {
            this.initSlotMachine(this._machineType);
            this._controlBar = new Modules.ControlBar(this._container);
            this._winLines = new Modules.Winlines(this._container);
            this.initEvents();
            this._controlBar.updateData(this._game.dataController.data,false);
            this._slotMachine[this._currentMachineType].updateSlotSymbolIndex(this._game.dataController.data.symbolMatrix);
        }

        /**
         * Inits events
         */
        private initEvents():void{
            this.initSlotBarEvents();
            this.initSlotMachineEvents();
            this.initWinLinesEvents();
        }

        /**
         * init slot machine due to slot machine type
         * @param type - slot machine type
         */
        private initSlotMachine(type:Enum.MachineType){
            switch(this._machineType){
                case Enum.MachineType.Reel:
                    this._currentMachineType = Modules.SliderMachine.toString();
                    this._slotMachine[this._currentMachineType] = new Modules.SliderMachine(this._container);
                    break;
            }
        }
        /**
         * Inits slot bar events
         */
        private initSlotBarEvents(){
            let mL = Enum.Listeners; 
            this._controlBar.on(mL.OnSpinBarAction,this.checkSlotBarAction.bind(this));
        }

        private initSlotMachineEvents(){
            let mL = Enum.Listeners; 
            this._slotMachine[this._currentMachineType].on(mL.OnSpinMachineAction,this.checkSlotAnimState.bind(this));
        }

        private initWinLinesEvents(){
            let mL = Enum.Listeners;
            this._winLines.on(mL.OnWinLinesAction,this.onAnimationAction.bind(this)); 
            this._winLines.on(mL.OnWinLinesAction,this.checkSlotAnimState.bind(this)); 
        } 

        /**
         * Change slot machine configurations due to slot machine type
         * @param type - slot machine type
         */
        private changeSlotMachineType(type:Enum.MachineType){
            this._machineType = type;
            this._slotMachine[this._currentMachineType].destroy();
            this.initSlotMachine(type);
        }
        
        public onDataAction(action:Dev.Enum.DataListener,data:Interface.IResponseData){
            switch(action){
                case Dev.Enum.DataListener.message: 
                    this._currentSpinButtonAction = Enum.SpinAction.StopSpin;
                    this.checkSlotBarAction();         
                    break;
                case Enum.DataListener.updateBalance:
                    this._controlBar.updateCredit(data);
                    break;
            }
        }

        public onAnimationAction(action : Dev.Enum.AnimListener):void {
            let machine = this._slotMachine[this._currentMachineType];
            let data:Interface.IResponseData = this._game.dataController.data;
            switch(action){
                case Dev.Enum.AnimListener.MatchSymbolWin:
                   // machine.playMatchAnimation(data.win,0,.5);
                    this._winLines.playWinlineAnimation(machine.winLineInfo,data.win,0,machine.matrixSymbols,.5,false);
                    break;
                case Dev.Enum.AnimListener.LoopMatchSymbolWin:
                   // machine.playLoopAnimation(this._game.dataController.data.win,1,1);
                    this._winLines.playWinlineAnimation(machine.winLineInfo,data.win,0,machine.matrixSymbols,.5,true)
                    break;
                case Dev.Enum.AnimListener.PlayNextAnimation:
                    this.emit(Dev.Enum.AnimListener.PlayNextAnimation);
                    break;
                case Dev.Enum.AnimListener.SortScenarioAnimation: 
                    this.emit(Dev.Enum.AnimListener.SortScenarioAnimation,data);
                    break;
                case Dev.Enum.AnimListener.AnimStopped:
                    this._controlBar.setButtonState(Enum.SpinButtonState.Normal,true); 
                    this._currentSpinButtonAction = Enum.SpinAction.StartSpin;
                    break;
            }
        } 
        
        /**
         * Checks slot bar action
         */
        private checkSlotBarAction(){
            let machine = this._slotMachine[this._currentMachineType];
            switch(this._currentSpinButtonAction){
                case Enum.SpinAction.StartSpin:
                    this._winLines.stopLoopAnimation();
                    this._game.dataController.fakePayCalculate();
                    this._slotMachine[this._currentMachineType].playSpinAnimation();
                    let spinningDuration = Config.SlotConfig.ReelMachine.duration.spinningDuration;
                    Core.Managers.TickerManager.instance.addTimeout("fakeData",spinningDuration,()=>{
                        this._slotMachine[this._currentMachineType].updateSlotSymbolIndex(this._game.dataController.data.symbolMatrix);
                        this.onDataAction(Dev.Enum.DataListener.message,this._game.dataController.data);
                    },false)
                    this._controlBar.setButtonState(Enum.SpinButtonState.Stop,false);
                    this._currentSpinButtonAction = Enum.SpinAction.ForceSpin;
                    break;
                case Enum.SpinAction.ForceSpin:
                    this._slotMachine[this._currentMachineType].playForceStopAnimation();  
                    this._controlBar.setButtonState(Enum.SpinButtonState.Stop,true);
                    break;
                case Enum.SpinAction.SkipSpin:
                    break;
                case Enum.SpinAction.QuickSpin:
                    break;
                case Enum.SpinAction.StopSpin:
                    this._slotMachine[this._currentMachineType].playStopAnimation();  
                    this._controlBar.setButtonState(Enum.SpinButtonState.Stop,false);
                    break;
            }
        }

        /**
         * Checks slot anim state according to Info.SlotAnimState
         * @param animationAction 
         */
        public checkSlotAnimState(animationAction:Enum.SlotAnimState,data:any):void{
            switch(animationAction){
                case Enum.SlotAnimState.SpinStarted:
                    this._controlBar.setButtonState(Enum.SpinButtonState.Stop,false);  //TODO will be changed
                    this._game.dataController.data.balance --;
                    this._controlBar.updateCredit(this._game.dataController.data);
                    this._currentSpinButtonAction = Enum.SpinAction.ForceSpin;
                    this._controlBar.updateData(this._game.dataController.data,false);
                    break;
                case Enum.SlotAnimState.SpinCompleted:
                    this._controlBar.setButtonState(Enum.SpinButtonState.Normal,true); 
                    this._currentSpinButtonAction = Enum.SpinAction.StartSpin;
                    break;
                case Enum.SlotAnimState.SpinQuicked:
                    break;
                case Enum.SlotAnimState.SpinSkipped:
                    break;
                case Enum.SlotAnimState.SpinForceStopped:
                    this._controlBar.setButtonState(Enum.SpinButtonState.Normal,true); 
                    this._currentSpinButtonAction = Enum.SpinAction.StartSpin;
                    this.onAnimationAction(Dev.Enum.AnimListener.SortScenarioAnimation);
                    break;
                case Enum.SlotAnimState.SpinStopped:
                    this.onAnimationAction(Dev.Enum.AnimListener.SortScenarioAnimation); 
                    break;
                case Enum.SlotAnimState.MatchSymbolWinFinished:  
                    this._controlBar.setButtonState(Enum.SpinButtonState.Normal,true); 
                    this._currentSpinButtonAction = Enum.SpinAction.StartSpin;
                  //  this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                    break;
                case Enum.SlotAnimState.SliderBarFinished:
                    this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                    break;
                case Enum.SlotAnimState.MatchSymbolWinStarted:
                    this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                    break;
                case Enum.SlotAnimState.WinLineStarted:
                    this._controlBar.updateWin(data,true);
                    break;
            }
        }

        public get slotMachine(): Modules.Machine {
            return this._slotMachine[this._currentMachineType];
        }

        public get container(){
            return this._container;
        }
    }
}