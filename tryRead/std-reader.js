class StdInReader {
  #delay
  #events

  constructor(delay) {
    this.#delay = delay;
    this.#events = { data: [], end: [] };
  }

  addEvents(eventName, callback) {
    this.#events[eventName].push(callback);
  }

  removeEvents(eventName) {
    this.#events[eventName] = [];
  }

  start() {
    const watchStdId = setInterval(() => {
      process.stdin.setEncoding('utf-8');
      const data = process.stdin.read();
      if (data) {
        this.#events.data.forEach((callback) => {
          callback(data);
        })
      }

      if (process.stdin._readableState.ended) {
        this.#events.end.forEach((callback) => {
          callback();
        });
        clearInterval(watchStdId);
      }
    }, this.#delay);
  }
}

const reader = new StdInReader(100);
reader.addEvents('data', (data) => console.log(data));
reader.addEvents('end', () => console.log('ended'));
setTimeout(() => reader.removeEvents('data'), 5000);
reader.start();