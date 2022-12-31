const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')


startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){

}

function selectAnswer() {

}




















































// var timeoutHandle;
// function countdown(minutes) {
//     var seconds = 60;
//     var mins = minutes
//     function countdown() {
//     var counter = document.getElementById("timer2");
//     var current_minutes = mins-1
//     seconds--;
//     counter.innerHTML =
//     current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//     if( seconds > 0 ) {
//     timeoutHandle=setTimeout(countdown, 1000);
// }
//     else {
//     if(mins > 1){
//     setTimeout(function () { countdown(mins - 1); }, 1000);
// }
//     document.getElementById("timer2").innerHTML = "TIME IS UP!"
// }
// }
//     countdown();
// }


// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){

//         var myQuestions = [
//             {
//                 question: "What does i represent in JS?",
//                 answers: {
//                     a: '',
//                     b: ''
//                     c: ''
//                 },
//                 correctAnswer: ''
//             },
//             {
//                 question: "What does '?' represent in JS?",
//                 answers: {
//                     a: '',
//                     b: '',
//                     c: ''
//                 },
//                 correctAnswer: ''
//             },
//             {
//                 question: "What does '===' represent in JS?",
//                 answers: {
//                     a: '',
//                     b: '',
//                     c: ''
//                 },
//                 correctAnswer: ''
//             },
//             {
//                 question: "What is this '{}' called in JS?"
//                     a: '',
//                     b: '',
//                     c: ''
//                 },
//                 correctAnswer: ''
//             },
//         ];
// 	}

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}