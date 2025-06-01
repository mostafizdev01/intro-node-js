const EventEmitter = require('node:events'); // call the events 

const schoolBell = new EventEmitter();  // create new events

schoolBell.on('ring', ()=>{ /// set the events logic
    console.log('Yahoo!! class sesh! 😀');
    
})

schoolBell.on('broken', ()=>{
    console.log('Dhet abar class 🤕🤕');
    
})

schoolBell.emit('ring'); // call the allready created events..
schoolBell.emit('broken');