
namespace Dev.Modules {

    export class Background extends PIXI.utils.EventEmitter{

        private _container : Core.Modules.Container;
        private _bg: Core.Modules.Sprite;

        public constructor(container:Core.Modules.Container) {
            super();
            this._container = new Core.Modules.Container(0,0,container,"BackgroundContainer");
            this.initProperties();
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;

            this._bg = new Core.Modules.Sprite(r.width/2,r.height/2,aI.Bg,this._container,r.width,r.height);
        }
    }
}
