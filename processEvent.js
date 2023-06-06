const fs = require('fs');

const stream = fs.createReadStream(process.argv[2], 'utf-8');
stream.on('data', (data) => console.log('>>>', data));
stream.on('nd', () => console.log('END>>>'));

process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => console.log(data));
process.stdin.on('end', () => console.log('END'));
process.stdin.on('hello', (data) => console.log(`6363Hello ${data}`))
process.stdin.emit('hello', 'abc');

const EventEmitter = require('node:events');
const emitter = new EventEmitter();;
emitter.on('event', () => { console.log('yay!!!, my first data publsher.') });
emitter.on('event', (data) => { console.log(...data) });
emitter.emit('event', [1, 2, 3, 4, 5]);