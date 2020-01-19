
namespace Dev.Modules {
    export class SliderMachine extends Machine{

        private _reelSpinMask:Core.Modules.Graphic;
        private _frame:Core.Modules.Sprite;
        private _playTimeline:any[];
        private _stopTimeline : any;
        private _loopTimeline : any;

        public constructor(container:Core.Modules.Container) {
            super(Config.SlotConfig.ReelMachine,container);
        }

        public init() {
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;

            this.winLineInfo = Config.SlotConfig.ReelMachine.winLine;
            this.winInfo = Config.SlotConfig.ReelMachine.win;

            let frameScale = Config.SlotConfig.ReelMachine.reelMask.frameScale;
            let frameGraphic = new Core.Modules.Graphic(frameScale.pX,frameScale.pY,frameScale.x,frameScale.y,aI.FrameGraphic,this.container);
            this._frame = new Core.Modules.Sprite(frameScale.pX,frameScale.pY,aI.Frame,this.container,frameScale.x,frameScale.y);
            this.container.addChild(this.reelContainers[0].parent);
       

            this.initMask();
            this.playFallDownContainer(this._reelSpinMask);
            this.initEvents();
        }

        private initEvents(){
        }
        
        private initMask(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let maskScale = Config.SlotConfig.ReelMachine.reelMask.normalScale;
            this._reelSpinMask = new Core.Modules.Graphic(maskScale.pX,maskScale.pY,maskScale.x,maskScale.y,aI.GeneralReelMask,this.reelContainers[0].parent);
            this.reelContainers[0].parent.mask = this._reelSpinMask;
        }

        public playForceStopAnimation(): void {
            let y = Config.SlotConfig.ReelMachine.count.matchIconEndPositionY;
            let sI = Config.SlotConfig;
            let sM = sI.ReelMachine;
            let reelStopSpeed =sM.duration.reelStop;
            let reelStopOffsetDuration = sM.duration.fallDownReelOffset;
            let ease = sM.ease.reelStop;
            let yoyoCount = sM.count.yoyo;
            if(this._stopTimeline)
            this._stopTimeline.kill();
            this._stopTimeline = new TimelineMax();
            this.on(Enum.SlotAnimState.ReelSpinCompleted,(reelIndex:number)=>{               
                 this._playTimeline[reelIndex].restart();
                 this._playTimeline[reelIndex].kill();
                 this.reelContainers[reelIndex].filters = null;   
                 TweenMax.to(this.reelContainers[reelIndex], reelStopSpeed, 
                 {
                     ease: ease,y: "+="+yoyoCount,yoyo:true,repeat:1,
                     onComplete:()=>{
                         if(reelIndex == this.reelContainers.length-1){
                             this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinStopped);
                             this.removeListener(Enum.SlotAnimState.ReelSpinCompleted);
                         }
                     }
                 });
            });
        }

        public playMatchAnimation(wins:Array<Interface.IWData>,index:number,offsetDuration:number):void {
            // for(let i = 0; i<wins[index].winSymbolMatrix.length; i++){
            //     let row = wins[index].winSymbolMatrix[i].x;
            //     let column = wins[index].winSymbolMatrix[i].y;
            //     let symbol = this.matrixSymbols[row][column];
            //     TweenMax.fromTo(symbol,.5,{tint:0xffffff},{tint:symbol.symbolConfig.tint,ease:"power0",yoyo:true,repeat:1,onComplete:()=>{
            //         Core.Managers.TickerManager.instance.addTimeout("Loop",offsetDuration,()=>{
            //             if(i<wins[index].winSymbolMatrix.length-1){
            //                 if(index<wins.length-1){
            //                     index++;
            //                     this.playMatchAnimation(wins,index,offsetDuration);
            //                 }else{
            //                     this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.MatchSymbolWinFinished);
            //                 }
            //             }
            //         },false);
            //     }});
            // }
        }  

        public playStopAnimation(): void {
            let sI = Config.SlotConfig;
            let sM = sI.ReelMachine;
            let reelStopSpeed =sM.duration.reelStop;
            let ease = sM.ease.reelStop;
            let yoyoCount = sM.count.yoyo;
            if(this._stopTimeline)
            this._stopTimeline.kill();
            this._stopTimeline = new TimelineMax();
            let index = 0;
            this.on(Enum.SlotAnimState.ReelSpinCompleted,(reelIndex:number)=>{
                if(reelIndex==index){
                    let reelStopOffsetDuration = sM.duration.reelStopOffset;
                    if(index==0)reelStopOffsetDuration = 0;
                    index++;
                    this._stopTimeline.call(()=>{ 
                        this._playTimeline[reelIndex].restart();
                        this._playTimeline[reelIndex].kill();
                        TweenMax.to(this.reelContainers[reelIndex].children,sM.duration.reelStop, {
                            onStart:()=>{
                                this.reelContainers[reelIndex].filters = null;
                            },
                            ease: sM.ease.reelStop,
                            y: "+="+(sM.count.yoyo),
                            yoyo:true,
                            repeat:1,
                            onComplete:()=>{
                                if(reelIndex == this.reelContainers.length-1){
                                    this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinStopped);
                                    this.removeListener(Enum.SlotAnimState.ReelSpinCompleted);
                                }
                            }
                        });                            
                    },null,"+="+(reelStopOffsetDuration));
                 }
            });
        }

        public playLoopAnimation(wins:Array<Interface.IWData>,duration:number,loopingTime:number):void {
            if(this._loopTimeline){
                this._loopTimeline.restart();
                this._loopTimeline.kill();
                Core.Managers.TickerManager.instance.removeTicker("Loop");
            }
            this._loopTimeline = new TimelineMax({delay:duration,repeatDelay:loopingTime+1,repeat:-1});
            this._loopTimeline.call(()=>{
                 this.playMatchAnimation(wins,0,duration);
            });
        }

        public stopLoopAnimation(){
            if(this._loopTimeline){
                this._loopTimeline.restart();
                this._loopTimeline.kill();

                for(let i = 0; i<this.matrixSymbols.length; i++){
                    for(let j = 0; j<this.matrixSymbols[i].length; j++){
                        this.matrixSymbols[i][j].tint = 0xffffff;
                    }
                }
            }
        }

        playSpinAnimation(): void {
            this.emit(Enum.Listeners.OnSpinMachineAction,Enum.SlotAnimState.SpinStarted);
            let sC = this.slotMachineConfig;
            let duration = sC.duration.spin;
            let moveY = sC.symbol.scale.y*(sC.machine.reelMatrix.row) + sC.symbol.offset.y*(sC.machine.reelMatrix.row-1);
            this._playTimeline = [];
            for(let i = 0; i<this.reelContainers.length; i++){
                let timeline = new TimelineMax({repeat:-1,delay:i*sC.duration.fallUpReelOffset});
                this.reelContainers[i].filters = [new PIXI.filters.BlurFilter(1)];
                timeline.to(this.reelContainers[i].children,duration, {
                    ease: sC.ease.spin,
                    y: "+="+(moveY+sC.symbol.scale.y), 
                    modifiers: {
                        y: function(y:number) {
                            return y/(moveY) <1 ? y: y%(moveY)-sC.symbol.scale.y;
                        }
                    },
                    onComplete:()=>{
                        this.emit(Enum.SlotAnimState.ReelSpinCompleted,i);
                    }
                });
                this._playTimeline.push(timeline);
            }
        }

        public playQuickSpinAnimation(): void {
        }

        public playSkippedAnimation(): void {
        }

        dispose():void{

        }
    }
}