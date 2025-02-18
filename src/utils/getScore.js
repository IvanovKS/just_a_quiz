const getScore = (arr1, arr2) => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count += 1;
    }
  }
  return count;
};

export default getScore;
