const getShuffledAnswers = (correct, incorrect) => {
  if (Array.isArray(incorrect)) {
    const answers = [...incorrect, correct];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  } else {
    const answers = [incorrect, correct];
    return answers;
  }
};

export default getShuffledAnswers;
