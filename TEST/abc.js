const events = require('events');
const eEmitter = new events.EventEmitter();
const sayHello = function() {
    console.log("Hello Bakchodi");
}


const sayHello1 = function() {
    console.log("Hello Bakchodi1");
}


eEmitter.addListener('introduce', sayHello1);
eEmitter.on('introduce', sayHello);


eEmitter.emit('introduce');