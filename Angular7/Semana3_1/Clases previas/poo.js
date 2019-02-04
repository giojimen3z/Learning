var Persona = /** @class */ (function () {
    function Persona(cuantoskilometros) {
        this.kilometros = cuantoskilometros;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando ' + this.kilometros);
    };
    return Persona;
}());
var mobjeto = new Persona(1000);
mobjeto.caminar();
