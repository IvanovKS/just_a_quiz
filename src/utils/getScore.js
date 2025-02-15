const getScore = (arr1, arr2) => {
  const commonArray = [...arr1, ...arr2];
  const score = [...new Set(commonArray)];
  return score.length;
};

export default getScore;
