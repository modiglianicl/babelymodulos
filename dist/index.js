"use strict";

var _classImpuestos = require("./class-impuestos.js");
var _classCliente = require("./class-cliente.js");
// class-cliente.js y class-impuestos.js

// Asignando clase impuestos

var impuestotest = new _classImpuestos.Impuestos(10000, 5000);

// Asignando clase cliente

var clientetest = new _classCliente.Cliente('Felipe', impuestotest);
console.log(clientetest.nombre);
console.log(clientetest._impuesto);
console.log(clientetest.calcularImpuesto());