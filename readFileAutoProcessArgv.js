const fs = require("fs");
const process = require("process");
let fileName = process.argv[2];
let path = __dirname +"/"+fileName;

fs.readFile(path,{encoding:"utf-8"},(err,data) => {
    if (err) {
        console.log("The file can't be read");
        console.error(err);
    } else {
        console.log(data);
    }
});