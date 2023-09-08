const timer = document.querySelector("#timer")
let millisecond = 0
let second = 0
let minute = 0
let hourse = 0
let running = false
let lapCounter = 1;
let time;

let a = document.getElementById('button-start')
a.addEventListener('click', () => {
    if (!running) {
        time = setInterval(() => {
            millisecond += 10;

            if (millisecond == 990) {
                millisecond = 0;
                second++;
            }

            if (second == 59) {
                second = 0
                minute++
            }
            timer.innerHTML = minute + ':' + second + ':' + millisecond
        }, 10)
        running = true;
    }
})

let stop = document.getElementById('button-stop');
stop.addEventListener('click', () => {
    clearInterval(time);
    running = false
});

let reset = document.getElementById('button-reset');
reset.addEventListener('click', () => {
    clearInterval(time);
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    timer.innerHTML = "00:00:000";
    running = false
});

let lap = document.getElementById('button-lap');
lap.addEventListener('click', () => {
    let lapTime = timer.innerHTML;
    let lapDisplay = document.createElement('p');
    lapDisplay.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
    lapCounter++;
    document.querySelector('.lap').appendChild(lapDisplay);
});