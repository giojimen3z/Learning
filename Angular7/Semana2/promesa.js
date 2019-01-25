var mipromesa = new Promise(function (resolve, reject) {
    //resolve();
    reject();
});
mipromesa.then(function () {
    console.log("la operacion d ela promesa  ha finalizado con exito");
}, function () {
    console.log("la operacion d ela promesa  ha finalizado con Error");
});
