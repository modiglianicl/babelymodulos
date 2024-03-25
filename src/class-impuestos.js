export class Impuestos {
    constructor(montoBrutoAnual,deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(monto) {
        if(typeof monto === 'number') {
            this._montoBrutoAnual = monto;
        } else {
            console.log('Solo se aceptan valores númericos para el monto bruto anual.');
        }
    }
    get deducciones() {
        return this._deducciones;
    }
    set deducciones(deduccionesNuevas) {
        if(typeof deduccion === 'number'){
            this._deducciones = deduccionesNuevas;
        } else {
            console.log('Solo se aceptan valores númericos para deducciones.');
        }
    }
}