
namespace Dev.Stages { 
    
    import GameController = Controller.GameController;
    import DisplayManager = Core.Managers.DisplayManager;
    import AnimInfo = Config.AnimConfig;

    export class MainStage extends Core.Modules.Stage {

        private _background : Modules.Background;
        private _slotMachineController : Controller.MachineController;
        /** running when main stage */
        public init() {
            this.game = GameController.Instance;
            this._background = new Modules.Background(this);
            this._slotMachineController = new Controller.MachineController(this);
            this.onOrientationChanged(DisplayManager.instance.currentOrientation);
        }

        initEvents(){
            this.initDisplayEvents();
            this.initAnimationEvents();
            this.initDataEvents();
        }

        private onAnimationAction(action : Dev.Enum.AnimListener):void {
            switch(action){
                case Dev.Enum.AnimListener.MatchSymbolWin:
                    this._slotMachineController.onAnimationAction(action);
                    break;
                case Dev.Enum.AnimListener.LoopMatchSymbolWin:
                    this._slotMachineController.onAnimationAction(action);
                    break;
                case Dev.Enum.AnimListener.AnimStopped:
                    this._slotMachineController.onAnimationAction(action);
                    break;
            }
        } 

        private onDataAction(action:Dev.Enum.DataListener,data:Interface.IResponseData){
            switch(action){
                case Dev.Enum.DataListener.message:
                    this.game.emit(Dev.Enum.AnimListener.SortScenarioAnimation,data);
                    break;
            }
            this._slotMachineController.onDataAction(action,data);
        }

        private initAnimationEvents(){
            let animSort = AnimInfo.AnimationSort;
            let aI = Dev.Enum.AnimListener;

            for(let i = 0; i<animSort.length; i++){
                this.game.on(animSort[i],this.onAnimationAction.bind(this,animSort[i]));
            }

            this.game.on(Dev.Enum.AnimListener.AnimStopped,()=>{
                this._slotMachineController.onAnimationAction(Dev.Enum.AnimListener.AnimStopped);
            });

            this._slotMachineController.on(Dev.Enum.AnimListener.PlayNextAnimation,()=>{
                this.game.emit(Dev.Enum.AnimListener.PlayNextAnimation);
            });

            this._slotMachineController.on(Dev.Enum.AnimListener.SortScenarioAnimation,(data:Interface.IResponseData)=>{
                this.game.emit(Dev.Enum.AnimListener.SortScenarioAnimation,data);
            });
        }

        private initDataEvents(){
            let dataListener = Object.keys(Dev.Enum.DataListener);
            for(let i = 0; i<dataListener.length; i++){
                let dataName = Dev.Enum.DataListener[dataListener[i]];
                this.game.on(dataName,(data:Interface.IResponseData)=>{
                    this.onDataAction(dataName,data);
                });
            }
        }

        setVisualPortrait(): void {
        }

        setVisualLandscape(): void {
        }

        /** running when destroying stage*/
        public dispose() {
        }
    }
}