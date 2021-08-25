const events = require('events');
const eEmitter = new events.EventEmitter();
const sayHello = function() {
    console.log("Hello Bakchodi");
}


eEmitter.on('introduce', sayHello);


eEmitter.emit('introduce');