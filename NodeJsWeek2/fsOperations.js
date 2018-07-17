const FILE_NAME = 'todo.txt';
const DEFAULT_ENCODING = 'utf8';
const fs = require('fs');

module.exports.readFile = function(){
    return new Promise((resolve, reject) => {
        fs.readFile(FILE_NAME, DEFAULT_ENCODING, (err, data) => {
            (err) ? reject(err) : resolve(data);
        });
    });
}

module.exports.writeFile = function(content){
    return new Promise((resolve, reject) => {
        fs.writeFile(FILE_NAME, content, (err, data) => {
            (err) ? reject(err) : resolve(data);
        });
    });
}

module.exports.deleteFile = function(){
    return new Promise((resolve, reject) => {
        fs.unlink(FILE_NAME, (err, data) => {
            (err) ? reject(err) : resolve(data);
        });
    });
}

module.exports.appendFile = function(args){
    return new Promise((resolve, reject) => {
        fs.appendFile(FILE_NAME,args + "\n", (err, data) => {
            (err) ? reject(err) : resolve(data);
        });
    });
}

module.exports.updateFile = function(index, args){
   
    txtFile = txtFile.split('\n');
    txtFile = txtFile.splice(index, 1, args);
    return new Promise((resolve, reject) => fs.appendFile(FILE_NAME), `\n${txtFile.join()}`);
}

module.exports.remove = function(index){
    var txtFile = fs.readFile(FILE_NAME, DEFAULT_ENCODING);
    txtFile = txtFile.split(`\n`).slice(index);
    return new Promise((resolve,reject) => fs.appendFile(FILE_NAME),`\n${txtFile.join()}`);
  }
