
module Dev.Controller {
    export class DataController extends Core.Controller.DataController{

        private _developmentMode:boolean;

        private _data: Interface.IResponseData = {
            balance:500,
            currencySymbol:"Euro",
            earn : {coins:0,cents:0},
            totalEarn : {coins:0,cents:0},
            bet:{betLines:10,betLevelValues:null,coinValues:null},
            win:null,
            symbolMatrix: [
                [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()],
                [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()],
                [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()]
            ]
        };
        private _cashBet:number;
        /** AnimationController class's init function */
        public constructor() {
            super();
            this._developmentMode = false;
        }

        init(){
        }

        dataAction(data:Interface.IResponseData){
            if(data.currentAction != undefined){
                switch(data.currentAction){
                    case Enum.DataListener.fakeSymbol:
                        console.log("developmentMode on")
                        this._developmentMode = true;
                        this._data.symbolMatrix = data.symbolMatrix;
                        console.log("Symbol matrix = " + this._data.symbolMatrix)
                        console.log("Please spin")
                        this.fakePayCalculate();
                        break;
                    case Enum.DataListener.randomSymbol:
                        console.log("developmentMode false")
                        this._developmentMode = false;
                        console.log("Please spin")
                        this.fakePayCalculate();
                        break;
                    case Enum.DataListener.updateBalance:
                        console.log("Updated Balance")
                        console.log("Current Balance = " + data.balance);
                        this.emit(Enum.DataListener.updateBalance,data);
                        break;
                }
            }
        }

        public fakePayCalculate(){
            
            if(!this._developmentMode){
                this._data.symbolMatrix = [
                    [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()],
                    [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()],
                    [this.randomSymbolIndex(),this.randomSymbolIndex(),this.randomSymbolIndex()]
                ]
            }

            let wins = new Array<Interface.IWData>();
            let symbolCounts : Array<Array<number>> = new Array<Array<number>>();
            for(let t = 0; t<5; t++){
                let symbolCount: Array<number> = new Array<number>();
                symbolCounts.push(symbolCount);
            }
            for(let i = 0; i<this._data.symbolMatrix.length; i++){
                for(let t = 0; t<5; t++)symbolCounts[t].push(0);
                for(let j = 0; j<this._data.symbolMatrix[i].length; j++){
                    let symbolIndex = this._data.symbolMatrix[i][j];
                    symbolCounts[symbolIndex][i]++;
                }
            }
            
            let payoutData = Config.DataConfig.PayoutData;
            for(let i = 0; i<payoutData.length; i++){
                if(this.checkCombination(payoutData,symbolCounts,i)){
                    let win:Interface.IWData = {
                        winType:Enum.WinType.SymbolWin,
                        lineIndex:payoutData[i].lineIndex,
                        currency:payoutData[i].payout
                    }
                    wins.push(win);
                }
            }   

            if(wins.length!=0)
            this._data.win = wins;
            else
            this._data.win = null;
        }

        private checkCombination(payoutData:any,symbolCounts:any,index:number):boolean{
            let checks : Array<boolean> = new Array<boolean>();
            for(let j = 0; j<payoutData[index].combination.length; j++){
                checks.push(false);
                let symbolCount = symbolCounts[payoutData[index].combination[j].symbol];
                if(payoutData[index].combination[j].count == symbolCount[payoutData[index].lineIndex]){
                    checks[j] = true;
                }
            }

            for(let m = 0; m<checks.length; m++){
                if(!checks[m])
                return false;
            }

            return true;
        }

        private randomSymbolIndex(){
            let random = 0 + Math.floor(Math.random() * Math.floor(5)); 
            return random;
        }

        initEvents(){
            window.addEventListener(Dev.Enum.DataListener.message,(data:any)=>{ this.dataAction(data.data);});
        }

        public get data(){
            return this._data;
        }
    }
}