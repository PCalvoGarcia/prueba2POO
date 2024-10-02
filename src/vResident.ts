import { vehicle } from "./vehiculo.js";

export class vResident extends vehicle{

    #pay: boolean;
    #payTariff: number;
    #type: string;
    exit: Date;
    #totalTime: number;

    constructor(tuition:number, rEntry:Date, pay: boolean, payTariff: number, type: string,totalTime:number){
        super(tuition);
        this.#pay = pay;
        this.#payTariff = payTariff;
        this.#type = type;
        this.exit = new Date;
        this.#totalTime = totalTime;

    };

    get pay(): boolean{
        return this.#pay;
    };
    set pay (newPay: boolean){
        this.#pay = newPay;
    };
    
    get payTariff():number{
        return this.#payTariff;
    };

    set payTariff (newpayTariff: number){
        this.#payTariff = newpayTariff;
    };

    get type(): string{
        return this.#type;
    };
    set type (newPay: string){
        this.#type = newPay;
    };

    get totalTime():number{
        return this.#totalTime;
    };

    set totalTime (newtotalTime: number){
        this.#totalTime = newtotalTime;
    };

}

