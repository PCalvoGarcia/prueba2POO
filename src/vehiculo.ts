export class vehicle {
    #tuition:number;
    rEntry:Date;

    constructor (tuition:number){
        this.#tuition = tuition;
        this.rEntry = new Date();
    };

    entryNow():void{
        this.rEntry = new Date();
    };

    get tuition():number{
        return this.#tuition;
    };

    set tuition (newTuition: number){
        this.#tuition = newTuition;
        this.entryNow();
    };



}

