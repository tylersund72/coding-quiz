const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnsers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    choice1: "JavaScript is a lightweight, interpreted programming language.",
    choice2:
      "JavaScript is designed for creating network-centric applications.",
    choice3: "JavaScript is complementary to and integrated with Java.",
    choice4: "All of the above.",
    answer: 4,
  },
  {
    question: "Which built-in method returns the length of the string?",
    choice1: "length()",
    choice2: "size()",
    choice3: "index()",
    choice4: "None of the above.",
    answer: 1,
  },
  {
    question:
      "Which built-in method returns the string representation of the number's value?",
    choice1: "toValue()",
    choice2: "toNumber()",
    choice3: "toString()",
    choice4: "None of the above.",
    answer: 3,
  },
  {
    question:
      "Which of the following function of Number object returns the number's value?",
    choice1: "toString()",
    choice2: "valueOf()",
    choice3: "toLocaleString()",
    choice4: "toPrecision()",
    answer: 2,
  },
];
