const quizData = [
    {
        question: "Какая столица Франции?",
        choices: ["Париж", "Лондон", "Рим", "Берлин"],
        correctAnswer: "Париж"
    },
    {
        question: "Какая планета является самой большой в нашей солнечной системе?",
        choices: ["Юпитер", "Марс", "Сатурн", "Земля"],
        correctAnswer: "Юпитер"
    },
    {
        question: "Какой язык используется для веб-разработки?",
        choices: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    }
];

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const quiz = quizData[currentQuestion];
    questionElement.textContent = quiz.question;
    choicesElement.innerHTML = "";

    quiz.choices.forEach(function(choice) {
        const li = document.createElement("li");
        li.textContent = choice;
        choicesElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedChoice = choicesElement.querySelector("li.selected");
    if (!selectedChoice) return;

    const answer = selectedChoice.textContent;
    const quiz = quizData[currentQuestion];

    if (answer === quiz.correctAnswer) {
        selectedChoice.className = "correct";
        score++;
    } else {
        selectedChoice.className = "incorrect";
    }

    submitButton.disabled = true;

    if (currentQuestion === quizData.length - 1) {
        showResult();
    } else {
        currentQuestion++;
        setTimeout(showQuestion, 1000);
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;

    restartButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    submitButton.disabled = false;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    showQuestion();
}

choicesElement.addEventListener("click", function selectChoice(e) {
    const selectedChoice = e.target;
    const choices = choicesElement.querySelectorAll("li");
    choices.forEach(function(choice) {
        choice.classList.remove("selected");
    });
    selectedChoice.classList.add("selected");
    submitButton.disabled = false;
});

function initializeQuiz() {
    showQuestion();
    choicesElement.addEventListener("click", selectChoice);
    submitButton.addEventListener("click", checkAnswer);
}

initializeQuiz();
