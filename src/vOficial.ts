import { vehicle } from "./vehiculo.js";

export class vOficial extends vehicle{

    #type: string;
    #pay: boolean;
    exit: Date;

    constructor(tuition:number, rEntry:Date, pay: boolean, payTariff: number, type: string){
        super(tuition);
        this.#pay = pay;
        this.#type = type;
        this.exit = new Date;
    };

    get pay(): boolean{
        return this.#pay;
    };
    set pay (newPay: boolean){
        this.#pay = newPay;
    };

    get type(): string{
        return this.#type;
    };
    set type (newPay: string){
        this.#type = newPay;
    };

}

