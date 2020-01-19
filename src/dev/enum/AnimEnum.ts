namespace Dev.Enum {
    /** Animation State Type*/
    export enum AnimationStateType {
        /** Playing Animation*/
        AnimationPlaying = "AnimationPlaying",
        /** Stopped Animation */
        AnimationStopped = "AnimationStopped"
    }

    /**
     * listeners actions
     */
    export enum AnimListener {
        AnimStopped = "AnimStopped",
        MatchSymbolWin = "MatchSymbolWin",
        LoopMatchSymbolWin = "LoopMatchSymbolWin",
        PlayNextAnimation = "PlayNextAnimation",
        SortScenarioAnimation = "SortScenarioAnimation"
    };

    /**
     * Anim names
     */
    export enum AnimNames {
        MatchFrame = "matchAnim/"
    }
}