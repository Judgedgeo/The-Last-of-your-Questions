
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nameEL = document.getElementById('name')
const scoreEL = document.getElementById('score')
var questionCounter = 0
var seconds = 60
var counter = document.getElementById("timer2");
var timerID;

//score keeper
const resultBox = document.getElementById('resultBox')
const initialBox = document.getElementById('initials')
const submitButton = document.getElementById("submit")

let RandomQuestions, currentQuestion
var correctAnswers = 0
let shuffledQuestions, currentQuestionIndex

submitButton.addEventListener('click', () => {
    nameEL.textContent = " name: " + initialBox.value
    scoreEL.textContent = " score: " + correctAnswers
    // local Storage
    localStorage.setItem(initialBox.value, correctAnswers)
})

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    seconds = 60
    startButton.classList.add('hide')
    document.getElementById("welcome-container").style.visibility = "hidden";
    clearInterval(timerID)
    timerID = setInterval(countdown, 1000)
    counter.innerHTML = seconds
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
//solve correct answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
console.log(correct);
    if (correct) {
        console.log
        correctAnswers++
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')

        startButton.innerText = ('Restart')
        startButton.classList.remove('hide')
    } else {

        correctAnswers = 0

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        correctAnswers++
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does || represent in JS?',
        answers: [
            { text: 'OR', correct: true },
            { text: 'AND', correct: false },
            { text: 'This', correct: false },
            { text: 'Minus', correct: false },
        ]
    },
    {
        question: 'What does ~ represent in JS?',
        answers: [
            { text: 'RIGHT SHIFT', correct: false },
            { text: 'Up', correct: false },
            { text: 'NOT', correct: true },
            { text: 'Down', correct: false },
        ]
    },
    {
        question: 'What does === represent in JS?',
        answers: [
            { text: 'Not equal to', correct: false },
            { text: 'Minus', correct: false },
            { text: 'Var', correct: false },
            { text: 'Equal value and type', correct: true },
        ]
    },
    {
        question: 'What does == represent in JS?',
        answers: [
            { text: 'Equal value', correct: false },
            { text: 'Equal to', correct: true },
            { text: 'Double equals', correct: false },
            { text: 'Equal type', correct: false },
        ]
    },

]

function countdown() {
    seconds--;
    counter.innerHTML = seconds
    if (seconds <= 0) {
        clearInterval(timerID)
        counter.innerHTML = "TIME IS UP!"
    }
    console.log(seconds);
}

