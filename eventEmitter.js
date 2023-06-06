class EventEmitter {
  #callBacks
  constructor() {
    this.#callBacks = {};
  }

  on(eventName, callback) {
    this.#callBacks[eventName] = this.#callBacks[eventName] || [];
    this.#callBacks[eventName].push(callback);
  }

  emit(eventName, ...args) {
    this.#callBacks[eventName].forEach(callback => {
      callback(...args);
    });
  }
}

const eventEmitter = new EventEmitter();
eventEmitter.on('event', () => { console.log('First listener.') });
eventEmitter.on('event', (a, b) => { console.log('Second listener', a, b) });
eventEmitter.emit('event', 1, 2, 3, 4, 5);