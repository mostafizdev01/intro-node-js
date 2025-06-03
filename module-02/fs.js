/// fs means == file system..

/// Filesystems work in two ways. 
// 1. Synchronous file system 
// 2. Asynchronous file system

// 1. Synchronous file system work in ways...

const fs = require('fs');

const text = "Learning file system in this modules";

fs.writeFileSync('./hello.txt', text)  // write text value on hello.txt file

const data = fs.readFileSync('./hello.txt', {encoding: 'utf-8'});  // reading hollo.txt files value

console.log(data);



// 2. Asynchronous file system work in ways...

const fstext = "We are learing file system in asynchoronous";

fs.writeFile("./hello.txt", fstext, {encoding: "utf-8"}, (err)=>{  // crating the writefile in asynchoronus fs
    if(err){
        console.log("something is wrong ❌", err);
        return;
    }
    console.log('File saved successfull ✅');
    
})

/// read the asynchoronus fs

fs.readFile('./hello.txt', {encoding: 'utf-8'}, (err, data)=>{  // crating the readfile in asynchoronus fs
    if(err){
        console.log('Smething went wrong ❌', err);
        return;
    }
    console.log('This is your data ✅', data);
    
})



