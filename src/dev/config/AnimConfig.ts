/// <reference path= '../enum/AnimEnum.ts'/>
namespace Dev.Config {

    import AnimNames = Enum.AnimNames;
    import Listener = Enum.AnimListener;
    export class AnimConfig {

        /** Sorting animation according to Scenario */
        static AnimationSort: Array<Dev.Enum.AnimListener> = [
            Listener.MatchSymbolWin,
            Listener.LoopMatchSymbolWin
        ];

        static SymbolAnimation : { [animName: string]: Core.Interface.IAnimation; } = { 
           // [AnimNames.MatchFrame]: { resource: AnimNames.MatchFrame, loop: false,time:2, from:0,to:51},
        };

        /**
         * Animation  of animation config for general animation
         */
        static Animation : Interface.IAnimation = {
            ease : {
                logoScale:"bounce.out",
                logoAlpha:"bounce.out",
                boxFillsAlpha:"power1.inOut",
                bgCurrentSwitch : "power0",
                bgNextSwitch: "power0",
                bgIdle:"sine.inOut",
                bgIdleBubble:"power0"
            },
            duration : {
                logoScale:.75,
                logoAlpha:.75,
                boxFillsAlpha:.25,
                bgCurrentSwitch:.25,
                bgNextSwitch:.25,
                bgIdle:.75,
                bgIdleRandTimeMin: 5,
                bgIdleRandTimeMax:10,
            },
            speed:{
                boxFillsOffset:.35
            }
        }
    }
}