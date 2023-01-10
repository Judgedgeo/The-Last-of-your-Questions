
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById ('answer-buttons')
const resultBox = document.getElementById('resultBox')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
    })

function startGame() {
    startButton.classList.add('hide')
    document.getElementById("welcome-container").style.visibility = "hidden";
    countdown(1);
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
    answerButtonsElement.removeChild  (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
    } else {
    startButton.innerText = ('Restart')
    startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
    element.classList.add('correct')
    } else {
    element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
{
    question: 'What does || represent in JS?',
    answers:[
        {text: 'OR', correct: true },
        {text: 'AND', correct: false },
        {text: 'This', correct: false },
        {text: 'Minus', correct: false },
]
    },
{
    question: 'What does ~ represent in JS?',
    answers:[
        {text: 'RIGHT SHIFT', correct: false },
        {text: 'Up', correct: false },
        {text: 'NOT', correct: true },
        {text: 'Down', correct: false },
]
    },
{
    question: 'What does === represent in JS?',
    answers:[
        {text: 'Not equal to', correct: false },
        {text: 'Minus', correct: false },
        {text: 'Var', correct: false },
        {text: 'Equal value and type', correct: true },
]
    },
{
    question: 'What does == represent in JS?',
    answers:[
        {text: 'Equal value', correct: false },
        {text: 'Equal to', correct: true },
        {text: 'Double equals', correct: false },
        {text: 'Equal type', correct: false },
]
    },

]
// Timer
var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function countdown() {
    var counter = document.getElementById("timer2");
    var current_minutes = mins-1
    seconds--;
    counter.innerHTML =
    current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if( seconds > 0 ) {
    timeoutHandle=setTimeout(countdown, 1000);
    }
    else {
    if(mins > 1){
    setTimeout(function () { countdown(mins - 1); }, 1000);
}
    document.getElementById("timer2").innerHTML = "TIME IS UP!"
    }
    }
    countdown();
};
