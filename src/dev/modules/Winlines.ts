namespace Dev.Modules {

    export class Winlines extends PIXI.utils.EventEmitter {

        private _container : Core.Modules.Container;
        private _winLines : Array<Core.Modules.Graphic> = new Array<Core.Modules.Graphic>();
        private _winLineAnimTimeline : any;
        private _amount:Core.Modules.Text;
        private _baseContainer:Core.Modules.Container;

        public constructor(container:Core.Modules.Container) {
            super();
            this._baseContainer = container;
            this.initProperties();
        }

        private initProperties(){
            this._winLineAnimTimeline = new TimelineMax();
        }

        /**
         * Plays winline animation 
         * @param wI - winline Info
         * @param index - winline index
         * @param mS - matrix symbols
         */
        public playWinlineAnimation(wI:Interface.IMatchWinLineInfo,wS:Array<Interface.IWData>,index:number,mS:Array<Symbol>[],duration:number,loop:boolean):void{
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let lineIndex = wS[index].lineIndex;
            let path = wI.winLinesPath[lineIndex];
            let line : Core.Modules.Graphic;
            this.stopLoopAnimation();
            this._container = new Core.Modules.Container(0,0,this._baseContainer,"WinLinesContainer");
            this._winLines = new Array<Core.Modules.Graphic>();

            if(loop==true){
                this.emit(Enum.Listeners.OnWinLinesAction,Enum.SlotAnimState.MatchSymbolWinFinished)
            }

            for(let j = 0 ; j<path.length-1; j++){
                let currentRow = path[j].row;
                let currentColumn = path[j].column;
                let nextRow = path[j+1].row;
                let nextColumn = path[j+1].column;
                let width = mS[currentRow][currentColumn].parent.position.x;
                let x = mS[currentRow][currentColumn].parent.position.x;
                let y = mS[currentRow][currentColumn].getGlobalPosition().y -15;
                line = new Core.Modules.Graphic(x,y, path[j].thickness,null,Config.AssetConfig.SlotWinLine,this._container);
                width -= mS[nextRow][nextColumn].parent.position.x;
                width = Math.abs(width);
                x = mS[nextRow][nextColumn].parent.position.x;
                y = mS[nextRow][nextColumn].getGlobalPosition().y-mS[currentRow][currentColumn].getGlobalPosition().y;
                y = currentRow==nextRow ? 0:y;
                line.drawLine(new PIXI.Point(x,y),width+path[j].thickness/3.2);
                this._winLines.push(line);
            } 
            
            this._amount = new Core.Modules.Text(r.width/2,r.height/2,aI.WinAmountText,this._container);

            switch(wI.type){
                case Enum.WinlineType.LinearAnimation:
                    this._container.alpha = 1;
                    this._winLineAnimTimeline.fromTo(this._container,.5,{alpha:0},{alpha:1,sine:"power0"});
                    this._amount.text = wS[index].currency.cents.toString();
                    this._amount.position.y = 210 + lineIndex*120;
                    break;
                case Enum.WinlineType.FadeIn:
                    this._winLineAnimTimeline.fromTo(this._container,.5,{alpha:0,sine:"power0"},{alpha:1});
                    break;
            }
            if(loop==false)
            this.emit(Enum.Listeners.OnWinLinesAction,Enum.SlotAnimState.WinLineStarted, wS[index].currency);

            this._winLineAnimTimeline.to(this._container,.5,{alpha:0,yoyo:true,sine:"power0",delay:duration,
            onStart:()=>{
            },
            onComplete:()=>{
                if(index<wS.length-1){
                    index++;
                    if(loop==false)
                    this.playWinlineAnimation(wI,wS,index,mS,duration,false);
                    if(loop)
                    this.playWinlineAnimation(wI,wS,index,mS,duration,true);
                }
                else{
                    if(loop==false)
                    this.emit(Enum.Listeners.OnWinLinesAction,Enum.AnimListener.PlayNextAnimation);
                    if(loop==true){
                        this.playWinlineAnimation(wI,wS,0,mS,duration,true);
                    }
                }
            }});
        }

        public stopLoopAnimation():void{
            if(this._winLineAnimTimeline){
                this._winLineAnimTimeline.restart();
                this._winLineAnimTimeline.kill();
                if( this._container){
                    this._container.destroy({children:true,baseTexture:false,texture:false});
                    this._container.alpha = 0;
                }
                this._winLineAnimTimeline = new TimelineMax();
            }
        }
    }
}