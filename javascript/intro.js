//Únicamente funcional sobre nodejs
const functions = require("./functons.js");

functions.saludar();
var result = functions.sumar(5, 5);
console.log("resultado", result);

let band = functions.validar("a");
console.error(band);

band = functions.validar("hola mundo")
console.log(band);


let nummay = functions.mayorque(13)
console.log(nummay);