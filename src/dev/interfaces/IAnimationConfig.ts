namespace Dev.Interface {

    export interface IAnimation {
        ease : {
            logoScale:string;
            logoAlpha:string;
            boxFillsAlpha:string;
            bgCurrentSwitch?:string;
            bgNextSwitch?:string;
            bgSwitch?:string;
            bgIdle?:string;
            bgIdleBubble?:string;
        },
        duration : {
            logoScale:number,
            logoAlpha:number;
            boxFillsAlpha:number;
            bgCurrentSwitch?:number,
            bgNextSwitch?:number;
            bgSwitch?:number;
            bgIdle?:number;
            bgIdleRandTimeMin?:number;
            bgIdleRandTimeMax?:number;
        },
        speed:{
            boxFillsOffset:number
        }
    }
}