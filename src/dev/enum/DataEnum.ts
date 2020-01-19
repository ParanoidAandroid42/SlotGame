namespace Dev.Enum {

    export enum SlotSymbol {
        SevenSymbol,
        BarSymbol,
        Bar2xSymbol,
        Bar3xSymbol,
        CherrySymbol
    }

    /**
     * listeners actions
     */
    export enum DataListener {
        error = "error",
        freeSpin = "freeSpin",
        spin = "spin",
        reSpin = "reSpin",
        bonus = "bonus",
        gamble = "gamble",
        gambleSelected = "gambleSelected",
        takeWin = "takeWin",
        jackpot = "jackpot",
        history = "history",
        message = "message",
        fakeSymbol = "fakeSymbol",
        randomSymbol = "randomSymbol",
        updateBalance = "updateBalance"
    };
}