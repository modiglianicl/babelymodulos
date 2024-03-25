// class-cliente.js y class-impuestos.js
import { Impuestos } from './class-impuestos.js';
import { Cliente } from './class-cliente.js';



// Asignando clase impuestos

let impuestotest = new Impuestos(10000,5000);

// Asignando clase cliente

let clientetest = new Cliente('Felipe',impuestotest);

console.log(clientetest.nombre);
console.log(clientetest._impuesto);
console.log(clientetest.calcularImpuesto());
