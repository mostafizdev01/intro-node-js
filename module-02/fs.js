/// fs means == file system..

const fs = require('fs');

const text = "Learning file system in this modules";

fs.writeFileSync('./hello.txt', text)  // write text value on hello.txt file

const data = fs.readFileSync('./hello.txt', {encoding: 'utf-8'});  // reading hollo.txt files value

console.log(data);
