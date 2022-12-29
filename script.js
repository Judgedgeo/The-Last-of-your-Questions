
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
}
