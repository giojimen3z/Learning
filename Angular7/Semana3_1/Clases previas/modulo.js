"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(cuantoskilometros) {
        this.kilometros = cuantoskilometros;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando ' + this.kilometros);
    };
    return Persona;
}());
exports.Persona = Persona;
