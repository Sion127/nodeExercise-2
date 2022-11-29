const fs = require("fs");
const process = require("process");
let fileName = process.argv[2];
let path = __dirname + "/" + fileName;

//A la variable CONTENT se asigna el posible valor del arreglo 
//El valor pasado se evaluará por medio de una notación ternaria.
//Si hay valor se le asigna, pero en caso contrario soló se asignará un valor en BLANCO 
let content = process.argv[3] ? process.argv[3] :"";

fs.writeFile(path,content,{encoding:"utf-8"},(err) => {
    if (err){
        console.log("The file can´t be created");
        console.error(err);
    }   else {
        console.log(`File ${fileName} created`);
    }
});