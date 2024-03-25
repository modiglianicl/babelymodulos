export class Cliente {
    constructor(nombre,objetoImpuesto = {}){
        this._nombre = nombre;
        this._impuesto = objetoImpuesto;
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === 'string') {
            this._nombre = nuevoNombre;
        } else {
            console.log('El nombre debe ser texto (string).')
        }
    }
    calcularImpuesto() {
            return ((this._impuesto._montoBrutoAnual - this._impuesto._deducciones) * 0.21);
    }
}