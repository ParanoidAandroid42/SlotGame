module Dev.Controller {
    
    import AnimationType = Dev.Enum.AnimListener;
    import AnimationManager = Core.Managers.AnimationManager;

    export class AnimationController extends Core.Controller.AnimationController{

        public AnimListener = Dev.Enum.AnimListener;
        
        /** AnimationController class's init function */
        public constructor() {
            super();
        }

        init(){

        }

        initEvents(){
            for(let i = 0; i<this.animations().length; i++){
                AnimationManager.Instance.on(this.animations()[i],()=>
                {
                    this.emit(this.animations()[i]);
                });
            }

            AnimationManager.Instance.on(Dev.Enum.AnimListener.AnimStopped,()=>
            {
                this.emit(Dev.Enum.AnimListener.AnimStopped);
            });

            this.on(Dev.Enum.AnimListener.PlayNextAnimation,()=>{
                AnimationManager.Instance.playNextAnimations();
            });

            this.on(Dev.Enum.AnimListener.AnimStopped,()=>{
            });

            this.on(Dev.Enum.AnimListener.SortScenarioAnimation,(data:Interface.IResponseData)=>{
                this.sortScenarioAnimation(data);
            });
        }

        /**sort scenario animation for slot game */
        public sortScenarioAnimation(data:Interface.IResponseData) {
            let animations = new Array<AnimationType>();
            for (let i = 0; i < Config.AnimConfig.AnimationSort.length; i++) {
                switch (Config.AnimConfig.AnimationSort[i]) {
                    case AnimationType.LoopMatchSymbolWin:
                        if(data.win!=null)
                        animations.push(AnimationType.LoopMatchSymbolWin);
                        break;
                    case AnimationType.MatchSymbolWin:
                        if(data.win!=null)
                        animations.push(AnimationType.MatchSymbolWin);
                        break;
                }
            }
            AnimationManager.Instance.sortScenarioAnimation(animations);
        }
        
        public deleteAnimations(){
            AnimationManager.Instance.deleteAnimations();
        }

        public animations():Array<Dev.Enum.AnimListener>{
            return Config.AnimConfig.AnimationSort;
        }
    }
}