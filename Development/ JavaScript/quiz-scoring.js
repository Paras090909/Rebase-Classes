// quiz-scoring.js
// Basic quiz scoring system using objects and functions

const quiz = {
  title: 'JavaScript Fundamentals Quiz',
  questions: [
    {
      id: 1,
      text: 'What keyword is used to declare a variable that cannot be reassigned?',
      choices: ['var', 'let', 'const', 'static'],
      answer: 'const'
    },
    {
      id: 2,
      text: 'Which array method returns a new array with the results of calling a function on every element?',
      choices: ['filter', 'map', 'reduce', 'forEach'],
      answer: 'map'
    },
    {
      id: 3,
      text: 'What value is returned when you compare 5 and "5" with === ?',
      choices: ['true', 'false', 'undefined', 'NaN'],
      answer: 'false'
    },
    {
      id: 4,
      text: 'How do you write a comment in JavaScript?',
      choices: ['<!-- comment -->', '// comment', '# comment', '/* comment */'],
      answer: '// comment'
    }
  ],

  calculateScore(userAnswers) {
    return this.questions.reduce((score, question) => {
      const userAnswer = userAnswers[question.id];
      return score + (userAnswer === question.answer ? 1 : 0);
    }, 0);
  },

  getMaxScore() {
    return this.questions.length;
  },

  getPercentage(score) {
    return (score / this.getMaxScore()) * 100;
  },

  getGrade(score) {
    const percentage = this.getPercentage(score);

    if (percentage === 100) return 'Perfect';
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Needs Improvement';
    return 'Try Again';
  },

  gradeQuiz(userAnswers) {
    const score = this.calculateScore(userAnswers);
    const percentage = this.getPercentage(score);
    const grade = this.getGrade(score);

    return {
      title: this.title,
      score,
      maxScore: this.getMaxScore(),
      percentage,
      grade,
      answers: this.questions.map(question => ({
        id: question.id,
        question: question.text,
        correctAnswer: question.answer,
        userAnswer: userAnswers[question.id] || null,
        isCorrect: userAnswers[question.id] === question.answer
      }))
    };
  }
};

// Example usage
const userAnswers = {
  1: 'const',
  2: 'map',
  3: 'false',
  4: '// comment'
};

const result = quiz.gradeQuiz(userAnswers);

console.log(`Quiz: ${result.title}`);
console.log(`Score: ${result.score}/${result.maxScore}`);
console.log(`Percentage: ${result.percentage.toFixed(0)}%`);
console.log(`Grade: ${result.grade}`);
console.log('Details:');
result.answers.forEach(answer => {
  console.log(`- Q${answer.id}: ${answer.isCorrect ? 'Correct' : 'Incorrect'} (You: ${answer.userAnswer}, Correct: ${answer.correctAnswer})`);
});
