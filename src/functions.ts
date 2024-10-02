export function tuitionUser():number {
    //TODO  pide matricula al usuario 
     let userInput = prompt('Introduce la matricula del vehiculo:');
     let tuition:number;
     if (userInput !== null){
        tuition = parseInt(userInput);
     } else {
        tuition = -1;
     };
    //!     matricula usuario
    return tuition;
};

export function tuitionIsOnList(tuition:number, listArray:Array<Object>) {
    //TODO buscar matricula en lista usersList
    let isOnList = false;
    for (let i = 0; i < listArray.length; i++) {
        if (listArray[i] === tuition) {
            isOnList = true;
        }
    }
    //!    si esta en una lista
    return isOnList;
};

export function listTour(listArray:Array<any>,numberYouHave:string | number, numberYouNeed:number, infoReturnEqual:string, infoReturnNOequal:string) {
    //TODO  bucle recorre lista pasada en atributos
    for ( let i=0 ; i<listArray.length; i++){
            if (listArray[i].numberYouHave === numberYouNeed){
            return infoReturnEqual;
        } else {
            return infoReturnNOequal;
        }
    }

    //!     posicion array
}

export function PayTrueNOregistredVehicle(listArrayObject:Array<{type:string; pay:boolean; payTariff:number}>, arrayPosition:number,type:string,pay:boolean,payTariff:number, listToSave:Array<any>) {
    //TODO actualizar objeto -> type:noResident pay:true payTariff:0.02
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        listArrayObject[arrayPosition].type = type;
        listArrayObject[arrayPosition].pay = pay;
        listArrayObject[arrayPosition].payTariff = payTariff;
    } else {
        console.error("Índice fuera de rango");
    }
    //*  new objeto modificado a noResidentList[]
    listToSave.push(listArrayObject[arrayPosition])
};

export function PayFalseNOregistredVehicle(listArrayObject:Array<{type:string; pay:boolean}>, arrayPosition:number,type:string,pay:boolean,listToSave:Array<any>) {
    //TODO actualizar objeto -> type:noResident pay:true payTariff:0.02
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        listArrayObject[arrayPosition].type = type;
        listArrayObject[arrayPosition].pay = pay;
    } else {
        console.error("Índice fuera de rango");
    }
    //*  new objeto modificado a noResidentList[]
    listToSave.push(listArrayObject[arrayPosition])
};

export function entryPayTrueRegistredVehicle(listArrayObject:Array<{type:string; pay:boolean; payTariff:number}>, arrayPosition:number,type:string,pay:boolean,payTariff:number, listToSave:Array<any>) {
    //TODO actualizar objeto -> type:noResident pay:true payTariff:0.02
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        listArrayObject[arrayPosition].type = type;
        listArrayObject[arrayPosition].pay = pay;
        listArrayObject[arrayPosition].payTariff = payTariff;
    } else {
        console.error("Índice fuera de rango");
    }
    //*  new objeto modificado a noResidentList[]
};

export function entryPayFalseRegistredVehicle(listArrayObject:Array<{type:string; pay:boolean}>, arrayPosition:number,type:string,pay:boolean,listToSave:Array<any>) {
    //TODO actualizar objeto -> type:noResident pay:true payTariff:0.02
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        listArrayObject[arrayPosition].type = type;
        listArrayObject[arrayPosition].pay = pay;
    } else {
        console.error("Índice fuera de rango");
    }
    //*  new objeto modificado a noResidentList[]
};

export function exitVehicle(listArrayObject:Array<{exit:Date}>, arrayPosition:number,exit:Date,pay:boolean,listToSave:Array<any>) {
    //TODO actualizar objeto -> type:noResident pay:true payTariff:0.02
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        listArrayObject[arrayPosition].exit = exit;
    } else {
        console.error("Índice fuera de rango");
    }
    //*  new objeto modificado a lista
};

export function counterTime(listArrayObject:Array<{entry:Date,exit:Date,totalTime:number}>, arrayPosition:number) {
    //TODO cuenta minutos registrado
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        let entry =  listArrayObject[arrayPosition].entry;
        let exit =  listArrayObject[arrayPosition].exit;
        const totalTimeMiliseconds = exit.getTime() - entry.getTime();
        const totalTimeMinutes = Math.floor(totalTimeMiliseconds / 60000);
        return totalTimeMinutes
    } else {
        console.error("Índice fuera de rango");
    }
    //*  contado y pasado a minutos
};

export function residentTime(listArrayObject:Array<{totalTime:number}>,totalTimeMinutes:number, arrayPosition:number) {
    //TODO suma minutos a los guardados anteriormente
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        listArrayObject[arrayPosition].totalTime += totalTimeMinutes
    } else {
        console.error("Índice fuera de rango");
    }
    //* minutos totales menos 
};

export function totalPayment(listArrayObject:Array<{payTariff:number, totalTime:number, totalPay:number}>, arrayPosition:number) {
    //TODO dinero que cuestan los minutos registrados
    if (arrayPosition >= 0 && arrayPosition < listArrayObject.length) {
        let totalTime = listArrayObject[arrayPosition].totalTime;
        let payTariff = listArrayObject[arrayPosition].payTariff;
        listArrayObject[arrayPosition].totalPay = totalTime*payTariff

    } else {
        console.error("Índice fuera de rango");
    }
    //*  calculo de dinero
};

