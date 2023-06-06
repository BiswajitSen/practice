let garbage = [];

const throwGarbage = () => {
  for (let i = 0; i < 10; i++) {
    garbage.push(Math.floor(Math.random() * 10));
  }
  console.log(garbage);
  setTimeout(throwGarbage, 1000);
};

const reCycleGarbage = () => {
  const filtered = garbage.filter((element) => {
    return element % 2 === 0;
  });
  console.log(filtered.join(' ').padStart(10), 'filtered.')
  garbage = [];
  setTimeout(reCycleGarbage, 2500);
};

throwGarbage();
reCycleGarbage();