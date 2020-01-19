namespace Dev.Enum {

    /**
     * Listeners
     */
    export enum Listeners{
        OnSpinBarAction = "OnSpinBarAction",
        OnSpinMachineAction = "OnSpinMachineAction",
        OnWinLinesAction = "OnWinLinesAction"
    }

    /**
     * Spin action
     */
    export enum SpinAction{
        StartSpin = "StartSpin",
        StopSpin = "StopSpin",
        SkipSpin = "SkipSpin",
        QuickSpin = "QuickSpin",
        ForceSpin = "ForceSpin"
    }

    /**
     * Slot anim state
     */
    export enum SlotAnimState{
        MatchIconFinished = "MatchIconAnimFinished",
        SliderBarFinished = "SliderBarAnimFinished",
        MatchSymbolWinFinished = "MatchSymbolWinFinished",
        WinLineStarted = "WinLineFinished",
        MatchSymbolWinStarted = "MatchSymbolWinStarted",
        SpinStarted = "SpinStarted",
        SpinCompleted = "SpinCompleted",
        SpinStopped = "SpinStopped",
        SpinSkipped = "SpinSkipped",
        SpinQuicked = "SpinQuicked",
        SpinForceStopped = "SpinForceStopped",
        ReelSpinCompleted = "ReelSpinCompleted"
    }

    /**
     * Spin button state
     */
    export enum SpinButtonState {
        Normal = "Normal",
        Quick = "Quick",
        Stop = "Stop",
        Auto = "Auto",
        Skip = "Skip"
    }

    /**
     * Spin mode
     */
    export enum SpinMode {
        FreeSpin = "FreeSpin",
        NormalSpin = "NormalSpin"
    }

    /**
     * Machine type
     */
    export enum MachineType{
        Reel = "reel"
    }

      /**
     * Winline type
     */
    export enum WinlineType{
        LinearAnimation = "LinearAnimation",
        FadeIn = "NoAnimation"
    }

    /**
     * Win type
     */
    export enum WinType {
        BigWin = "bigWin",
        SuperWin = "superWin",
        MegaWin = "megaWin",
        SymbolWin = "symbolWin",
        FreeSpinStartWin = "freeSpinWin"
    }

    export enum LineType {
        top,
        center,
        bottom
    }

    /**
     * Win animation type
     */
    export enum WinAnimationType {
        CoinThrow = "CoinThrow",
        CoinScaleUp = "CoinScaleUp",
        FadeInOut = "Default"
    }
}