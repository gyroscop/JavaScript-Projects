const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Who is the author of 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "F. Scott Fitzgerald", correct: false },
    ],
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Hippopotamus", correct: false },
    ],
  },
];

const answer_buttons = document.querySelector(".answers");
const buttons = document.querySelectorAll("button");
const button_next = document.getElementById("button_nxt");
const question = document.querySelector(".question");
const ans_1 = document.querySelector(".ans_1");
const ans_2 = document.querySelector(".ans_2");
const ans_3 = document.querySelector(".ans_3");
const ans_4 = document.querySelector(".ans_4");
const textElements = questions.map((question) =>
  question.answers.map((answers) => answers.text)
);

const correctElements = questions.map((question) =>
  question.answers.map((answers) => answers.correct)
);

let question_number = 0;
answer_buttons.addEventListener("click", validate_and_showNext());

button_next.addEventListener("click", showNextQuestion);

let clickedbutton = 0;
let correctCount = 0;
let incorrectCount = 0;
function validate(event) {
  const clickedbutton = event.target.id;
  //   console.log(clickedbutton);

  if (correctElements[question_number - 1][clickedbutton - 1] === true) {
    buttons[clickedbutton - 1].style.backgroundColor = "#92D6B6";
    correctCount++;
  } else {
    buttons[clickedbutton - 1].style.backgroundColor = "#FAA0A0";
    incorrectCount++;
  }
}

function showResult() {
  document.querySelector(
    ".quiz"
  ).innerHTML = `Total Correct Answer = ${correctCount} , Total incorrect Answer = ${incorrectCount} <br><br> Percentage = ${
    (correctCount / question_number) * 100
  } %`;

  // document.querySelector(".quiz").style.whiteSpace = "pre-line";---use while using \n for line break
}

function showQuiz(element) {
  question.innerHTML = questions[element].question;
  ans_1.innerHTML = textElements[element][0];
  ans_2.innerHTML = textElements[element][1];
  ans_3.innerHTML = textElements[element][2];
  ans_4.innerHTML = textElements[element][3];

  if (question_number >= 4) {
    showResult();
  } else {
    question_number++;
  }
}

function validate_and_showNext(event) {
  button_next.style.display = "initial";

  //   const clickedbutton = event.target.id;
  //   console.log(clickedbutton);
}
ans_1.addEventListener("click", validate);
ans_2.addEventListener("click", validate);
ans_3.addEventListener("click", validate);
ans_4.addEventListener("click", validate);

function showNextQuestion() {
  // need improvement
  ans_1.style.backgroundColor = "#FCF5E5";
  ans_2.style.backgroundColor = "#FCF5E5";
  ans_3.style.backgroundColor = "#FCF5E5";
  ans_4.style.backgroundColor = "#FCF5E5";
  showQuiz(question_number);
}

showQuiz(question_number);
