let mipromesa = new Promise(function(resolve:any, reject:any){
    
    //resolve();
    reject();
});

mipromesa.then(function(){

console.log("la operacion d ela promesa  ha finalizado con exito");
}, function(){

    console.log("la operacion d ela promesa  ha finalizado con Error");

});