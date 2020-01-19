namespace Core.Modules {
    export class SequenceAnimation extends PIXI.AnimatedSprite {

        private _config: Core.Interface.IAnimation; 
        private _animationsConfig :  { [animType: string]: Core.Interface.IAnimation; };

        /**
         * Creates an instance of sequence animation.
         * @param c - IAnimation config 
         * @param [x] - position x
         * @param [y] - position y
         * @param [p] - parent
         * @param [n] - name
         */
        constructor(c:Core.Interface.IAnimation,x?:number,y?:number,p?: PIXI.Container, n?: string) {
            super(SequenceAnimation.generateTextures(c.resource, c.to));
            this._config = c;
            this.position.set(x,y);
            this.name = n;
            this.loop = c.loop;
            p.addChild(this);
            this.setAnchor(Enum.Anchor.MiddleCenter);
        }

        public static generateTextures(frame: string, length: number): PIXI.Texture[] {
            const textures: any = [];
            for (let i = 0; i < length; i++) {
                let index;
                if(i<10){
                    index = "0000"+i;
                }else if(i<100){
                    index = "000"+i;
                }else{
                    index = "00"+i;
                }
                const texture = PIXI.Texture.from(frame + index);
                textures.push(texture);
            }
            return textures;    
        } 
        
        private setAnchor(anchor:Enum.Anchor):void{
            if(anchor!=null){
                switch(anchor){
                    case Enum.Anchor.UpLeft:
                        this.anchor.set(0, 0);
                        break;
                    case Enum.Anchor.UpCenter:
                        this.anchor.set(0.5, 0);
                        break;
                    case Enum.Anchor.UpRight:
                        this.anchor.set(1, 0);
                        break;
                    case Enum.Anchor.MiddleLeft:
                        this.anchor.set(0, 0.5);
                        break;
                    case Enum.Anchor.MiddleCenter:
                        this.anchor.set(0.5, 0.5);
                        break;
                    case Enum.Anchor.MiddleRight:
                        this.anchor.set(1, 0.5);
                        break;
                    case Enum.Anchor.DownLeft:
                        this.anchor.set(0, 1);
                        break;
                    case Enum.Anchor.DownCenter:
                        this.anchor.set(0.5,1);
                        break;
                    case Enum.Anchor.DownRight:
                        this.anchor.set(1, 1);
                        break;
                }
            }else{
                this.anchor.set(0.5, 0.5);
            }
        }

        public playAnimation(): void{
            this.gotoAndPlay(this._config.from);
            this.animationSpeed = this._config.time;
            this.loop = this._config.loop;
        }
    }
}