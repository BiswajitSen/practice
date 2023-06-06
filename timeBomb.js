const timeBomb = (timeLeft) => {
  console.log(timeLeft);
  if (timeLeft === 1) {
    console.log("BOOOOOM!!!");
  }
  timeLeft--;

  const id = setTimeout(() => timeBomb(timeLeft), 1000);

  setTimeout(clearTimeout, (timeLeft) * 1000, id);
}

timeBomb(5);