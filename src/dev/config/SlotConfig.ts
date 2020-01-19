/// <reference path= '../enum/SlotEnum.ts'/>
namespace Dev.Config {
    
    import SpineAnimation = Dev.Enum.SpineAnimation;

    export class SlotConfig {

        /**
         * Machine type of slot config
         */
        static MachineType = Enum.MachineType.Reel;

        /**
         * Slider machine of slot config
         */
        static ReelMachine: Interface.ISlotConfig = {
            reelMask : {
                normalScale : {x:600,y:395,pY:355,pX:Dev.Config.GameConfig.DisplayConfig.width/2},
                frameScale : {x:650,y:500,pY:342,pX:Dev.Config.GameConfig.DisplayConfig.width/2}
            },
            win:{
            },
            machine : {
                type:Enum.MachineType.Reel,
                reelMatrix : {row:3,column:3}
            },
            symbol : {
                scale : {x:120,y:125},
                offset : {x:48,y:5},
                winSpriteScale : {x:50,y:50}
            },
            speed : {
            },
            duration : {
                spinningDuration:2,
                reelStopOffset:.5,
                fallDown:.5,
                fallUp:.5,
                fallDownReelOffset:.1,
                fallUpReelOffset:.1,
                spin: .5,
                reelStop:.25,
                forceReelStop:.5,
                slider:.5,
                matchIconFallDown:1,
                matchIconLeftSide : 1,
                barFill:.8
            },
            count:{
                yoyo:25,
                forceYoyo:-25,
                fallDown:25,
                fallUp:25,
                fallDownEndPositionY:590,
                matchIconEndPositionY:-460
            },
            ease:{
                fallDown:"backout(0.5)",
                fallUp:"backout(0.5)",
                winSymbolMatch:"power0",
                slider:"power0",
                barFill:"sine.out",
                forceReelStop:"backout(0.5)",
                reelStop:"sine.out",
                spin:"power0"
            },
            winLine : {
                winLinesPath:[
                    [
                        
                        {row:0,column:0,thickness:8},
                        {row:0,column:1,thickness:9.75},
                        {row:0,column:2,thickness:9.75}
                        
                    ],
                    [
                        {row:1,column:0,thickness:8},
                        {row:1,column:1,thickness:9.75},
                        {row:1,column:2,thickness:9.75}
                    ],
                    [
                        {row:2,column:0,thickness:8},
                        {row:2,column:1,thickness:9.75},
                        {row:2,column:2,thickness:9.75}
                    ]
                ],
                type: Enum.WinlineType.LinearAnimation
            },
            slotSymbols : [
                {
                    frame: Dev.Enum.Texture.SevenSymbol,
                    name : "7Symbol",
                    tint : 0xffff00 
                },
                {
                    frame: Dev.Enum.Texture.BarSymbol,
                    name : "BarSymbol",
                    tint : 0xffff00 
                },
                {
                    frame: Dev.Enum.Texture.Bar2xSymbol,
                    name : "Bar2xSymbol",
                    tint : 0xffff00
                },
                {
                    frame: Dev.Enum.Texture.Bar3xSymbol,
                    name : "Bar3xSymbol",
                    tint : 0xffff00 
                },
                {
                    frame: Dev.Enum.Texture.CherrySymbol,
                    name : "CherrySymbol",
                    tint : 0xffff00
                }
            ]
        }
    }
}