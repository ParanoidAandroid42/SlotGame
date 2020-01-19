/// <reference path= '../enum/ResourceEnum.ts'/>
module Dev.Config {
    
    import Shape = Core.Enum.Shape;
    import Texture = Enum.Texture;
    import PreTexture = Enum.PreTexture;
    
    export class AssetConfig {

        static ResourceManager = Core.Managers.ResourceManager.Instance;

        static StageRect: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "StageBg",
            fill : 0x00000,
            alpha:0
        }
       //
        // ─── Button Config ────────────────────────────────────────────────────────────
        //
            
         /**spin button's config*/
         static SpinButton: Core.Interface.IButtonConfig = {
            frames: {
                out: Texture.SpinOut,
                over: Texture.SpinOver,
                down: Texture.SpinOver,
                disabled: Texture.SpinDisabled
            }
        };

         /**stop button's config*/
         static StopButton: Core.Interface.IButtonConfig = {
            frames: {
                out: Texture.StopOut,
                over: Texture.StopOver,
                down: Texture.StopOver,
                disabled: Texture.StopDisabled
            }
        };

        /**menu button text's config*/
        static MenuButton: Core.Interface.IButtonConfig = {
            frames: {
                out: "home_out",
                over: "home_over",
                down: "home_down",
                disabled: "home_disabled"
            },
            name: "Menu Button"
        }

        //
        // ────────────────────────────────────────────────────────── Button Config ─────
        //


        //
        // ─── Text Config ────────────────────────────────────────────────────────────
        //

        /** general text's style*/
        static GeneralTextStyle = new PIXI.TextStyle({
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            fontWeight: "bold",
            fill: "#d08f38",
            stroke: 0x000000,
            strokeThickness: 3,
            align: "center"
        });

        /** general bold text's style*/
        static GeneralBoldTextStyle = new PIXI.TextStyle({
            fontFamily: "Montserrat, sans-serif",
            fontSize: "22px",
            fontWeight: "bold",
            fill: "#ffffff",
            stroke: 0x000000,
            strokeThickness: 3,
            align: "center"
        });

        /** generic text's config*/
        static GenericText: Core.Interface.ITextConfig = {
            text: "Generic Text",
            textStyle: AssetConfig.GeneralTextStyle,
            name: "Generic Text"
        };

         /** general bold text's style*/
         static WinAmountTextStyle = new PIXI.TextStyle({
            fontFamily: Enum.WebFont.LuckiestGuy,
            fontSize: "75px",
            fontWeight: "bold",
            fill: 0xe37ce9,
            stroke: 0x00000,
            strokeThickness: 5,
            align: "center"
        });

        /** generic text's config*/
        static WinAmountText: Core.Interface.ITextConfig = {
            text: "",
            textStyle: AssetConfig.WinAmountTextStyle,
            name: "Win Amount"
        };

        
        /** generic bold text's config*/
        static GenericBoldText: Core.Interface.ITextConfig = {
            text: "Generic Bold Text",
            textStyle: AssetConfig.GeneralBoldTextStyle,
            name: "Generic Text"
        };

        //
        // ────────────────────────────────────────────────────────── Text Config ─────
        //

        //
        // ─── Sprite Config ────────────────────────────────────────────────────────────
        //

        /**
         * Normal spin bg of asset config
         */
        static Bg : Core.Interface.ISpriteConfig = {
            frame : Texture.Bg,
            name : "Background"
        }

        static UIRefBg : Core.Interface.ISpriteConfig = {
            frame : Texture.UIRefBg,
            name : "UıRefBg"
        }

        static Frame : Core.Interface.ISpriteConfig = {
            frame : Texture.Frame,
            name : "Frame"
        }

        /**
         * Logo  of asset config
         */
        static Logo : Core.Interface.ISpriteConfig = {
            frame : PreTexture.Logo,
            name : "Logo"
        }

        //
        // ────────────────────────────────────────────────────────── Sprite Config ─────
        //

        //
        // ─── Mask Config ────────────────────────────────────────────────────────────
        //

        static LoadingCircleBg : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "LoadingCircle",
            radius : 10,
            fill : 0xe37ce9
        }

        static SlotWinLine : Core.Interface.IMaskConfig = {
            shape : Shape.Line,
            name : "SlotWinline",
            fill : 0xb60000
        }

        static LoadingCircleFill : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "LoadingCircle",
            radius : 10,
            fill : 0x24d2fe
        }

        static PopupRect: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "PopupBg",
            fill : 0x00000,
            alpha:0
        }

        static GeneralReelMask: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "GeneralReelMask",
            fill : 0x00000,
            alpha:0
        }

        static FrameGraphic: Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "Frame",
            radius:5,
            fill : 0x644d26,
            alpha:0.5
        }

        static LoadingBg: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "LoadingBg",
            fill : 0x00000,
            alpha:0
        }

        //
        // ────────────────────────────────────────────────────────── Mask Config ─────
        //
    }
}