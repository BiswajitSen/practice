const twoSum = (list, sum) => {
  const lookUp = {};
  let index = 0;

  while (index < list.length) {
    const currentElement = +list[index];
    const complement = sum - currentElement;

    if (complement in lookUp) {
      return [currentElement, complement];
    }

    lookUp[currentElement] = index;
    index++;
  }

  return [-1, -1];
};

exports.twoSum = twoSum;