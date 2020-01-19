module Core.Controller {

     export abstract class DataController extends PIXI.utils.EventEmitter{

        private _currencyDSeparator: string;
        private _currencyTSeparator: string;
        private _currency: any;
        private _currencyCode: any;
        private _currencyPosition: string = "suffix";

        /** DataController class's init function. */
        public constructor() {
            super();
            this.init();
            this.initEvents();
        }

        abstract init():void;
        abstract dataAction(data:any):void;
        abstract initEvents():void;
    }
}