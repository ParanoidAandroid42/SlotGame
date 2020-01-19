namespace Dev.Interface {

    export interface IResponseData { 
        bet ?: {
            coinValues:{ default: number, values: Array<number> };
            betLevelValues:{ default: number, values: Array<number> };
            betLines: number;
        },
        currencySymbol?: string; //euro symbol etc.
        symbolMatrix?: Array<Array<number>>,
        win?:Array<IWData>;
        balance?:number;
        earn ?: ICurrency;
        totalEarn?: ICurrency;
        currentAction?:Dev.Enum.DataListener;
        nextAction?:Dev.Enum.DataListener;
    } 

    export interface IWData {
        lineIndex: Enum.LineType;
        currency : ICurrency;
        winType: Enum.WinType;
    }

    export interface IMatrix {
        x:number,
        y:number
    }

    export interface IPayout {
        combination: {
            count:number,
            symbol:Enum.SlotSymbol
        }[],
        payout:ICurrency,
        lineIndex:Enum.LineType
    }   

    export interface ICurrency {
        cents?: number;
        coins?: number;
    }
}