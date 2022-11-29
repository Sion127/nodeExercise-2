const fs = require("fs");
const process = require("process");
let fileName = process.argv[2];
let path = __dirname + "/" + fileName;
let content = process.argv[3] ? process.argv[3] :"";

if (content){
    fs.appendFile(path,content,(err) => {
        if (err){
            console.log(content);
            console.error(err);
        } else {
            console.log(`The file ${fileName} has been updated`);
        }
    });
} else {
    console.log("You have to write some content for updating");
}