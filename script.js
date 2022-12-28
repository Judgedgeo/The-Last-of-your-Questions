// var myQuestions = [
// {
//     question: "What State is Austin located in?",
//     answers:{},
//     correctAnswer:Texas
// },
// {
//     question: "What city is UT located in?",
//     answers:{},
//     correctAnswer:Austin
// },

//     {
//         question: "What is the mascot for UT?",
//         answers:{},
//         correctAnswer:Bevo
// },


// ]


const startingMinutes = 1;

let time = startingMinutes * 60;

const countdownEL = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
const minutes = Math.floor(time / 60);
let seconds=time % 60;



seconds = seconds <10 ? '0' + seconds : seconds;

countdownEL.innerHTML = `${minutes}:${seconds}`;
time--;

}
// setTimeout(TIME IS UP!);


// // function endTime(){
// timeH.innerHTML = 'TIMES UP!'
// }