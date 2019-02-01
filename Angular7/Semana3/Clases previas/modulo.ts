export class Persona {

    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;
    
    caminar(){

        console.log('estoy caminando '+this.kilometros);

    }
    constructor(cuantoskilometros:number){

        this.kilometros = cuantoskilometros;
    }

}
