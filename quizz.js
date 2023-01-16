const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let score = 0;

  const question1 = document.querySelector('input[name="question-1"]:checked');
  const question2 = document.querySelector('input[name="question-2"]:checked');
  const question3 = document.querySelector('input[name="question-3"]:checked');
  const question4 = document.querySelector('input[name="question-4"]:checked');

  if (question1 && question1.value == 'World Wide Web Consortium') {
    score++;
  }
  if (question2 && question2.value == 'Langage de balisage') {
    score++;
  }
  if (question3 && question3.value == 'Les deux sections head et body sont correctes') {
    score++;
  }
  if (question4 && question4.value == 'HyperText Markup Language') {
    score++;
  }

  alert(`votre score est  ${score}/4`);
});
