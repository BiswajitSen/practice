const unsteadySignal = (num) => {
  console.log('beep', num);
  num++;
  setTimeout(() => {
    unsteadySignal(num);
  }, Math.floor(500 + Math.random() * 1000));
}

unsteadySignal(1);