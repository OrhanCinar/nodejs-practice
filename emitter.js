const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});


eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let orhan = new Person('orhan');
let monica = new Person('monica');

monica.on('name', () => {
    console.log('my name is ' + monica.name);
});


orhan.on('name', () => {
    console.log('my name is ' + orhan.name);
});

orhan.emit('name');

monica.emit('name');