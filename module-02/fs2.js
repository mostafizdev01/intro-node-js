/// what is streeam and buffer. how to works streeam and buffer.

const fs = require('fs');

const readStreem = fs.createReadStream('./hello.txt', {encoding: 'utf-8'})
const writeStreem = fs.createWriteStream('./world.txt', {encoding: 'utf-8'})

console.log((readStreem.data), (writeStreem.data));


readStreem.on('data', (data)=>{
    console.log('line 12', data);

    writeStreem.write(data, (err)=>{
        if(err){
            console.log('err 16', err);
        }
    })
})


readStreem.on('error', (err)=>{
    if(err){
        console.log("error is 24", err);
    }
})
writeStreem.on('error', (err)=>{
    if(err){
        console.log("error is 29", err);
    }
})


readStreem.on('end', ()=>{
    console.log('reading ended 35');
    writeStreem.end()    
})

writeStreem.on('finish', ()=>{
    console.log('Written finish successfull ✅');
})