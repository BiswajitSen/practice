const powerSet = (set) => {
  if (set.length === 0) {
    return [[]];
  }

  const powerSetOfRest = powerSet(set.slice(1));
  return [...powerSetOfRest,
  ...powerSetOfRest.map((subSet) => [...subSet, set[0]])
  ];
}

powerSet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
