class Programa{

    public nombre: string;
    public version: number;

    getNombre (){

        return this.nombre;
    }
    setNombre(nombre: string){


        this.nombre = nombre;
    }

    getVersion (){

        return this.version;
    }
    setversion(version: number){


        this.version = version;
    }

}

class  EditorVideo extends Programa {

    public timeline:number;

}