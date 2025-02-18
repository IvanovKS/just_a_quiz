const getArrayOfCorrectAnswers = (arr) => {
  let answers = [];
  for (let i = 0; i < arr.length; i++) {
    answers.push(arr[i].correct_answer);
  }
  return answers;
};

export default getArrayOfCorrectAnswers;
