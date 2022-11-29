const fs = require("fs");
const process = require("process");
let fileName = process.argv[2];
let path = __dirname +"/"+ fileName;

if (path){
    fs.unlink(path, (err)  => {
        if (err){
            console.log("The fle can't be deleted");
            console.error(err);
        } else {
            console.log(`File ${fileName} deleted succesfully`);
        }
    }) ;
} else {
    console.log("The path is require to delete the file");
}