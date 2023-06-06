class Timer {
  #interval;
  #periodicTask;
  #timerId;
  constructor(interval, periodicTask) {
    this.#interval = interval;
    this.#periodicTask = periodicTask;
  }

  start() {
    this.#timerId = setInterval(() => {
      const isTaskOver = this.#periodicTask();
      if (isTaskOver) {
        clearInterval(this.#timerId);
      }
    }, this.#interval)
  }
}

a = [1, 2, 3, 4];
timer = new Timer(1000, () => {
  console.log(a.pop());
  return a.length === 0;
});

let count = 0;
timer = new Timer(1000, () => {
  console.log(count++);
  return count === 10;
});