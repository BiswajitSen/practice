const fs = require('fs');
const { twoSum } = require('./twoSum.js');

const parse = (list, delimiter) => {
  return list.trim().split(delimiter);
};

const findRequiredSum = (list, sum) => {
  for (const element of list) {
    const complement = sum - element;
    const [fval, sval] = twoSum(list, complement);

    if (fval !== -1) {
      return [+element, fval, sval];
    }
  }
};

const main = () => {

  const raw = fs.readFileSync('./resources/random-numbers.txt', 'utf-8');
  const randomSet = parse(raw, '\n');
  const sum = 217067184;

  console.log(findRequiredSum(randomSet, sum));
};

main();