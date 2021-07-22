const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function drawClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let secondsFraction = seconds / 60;
    let minutesFraction = (secondsFraction + minutes) / 60;
    let hoursFraction = (minutesFraction + hours) / 12;



    let hoursDegree = hoursFraction * 360;
    let minutesDegree = minutesFraction * 360;
    let secondsDegree = secondsFraction * 360;

    hourEl.style.transform = `rotate(${hoursDegree}deg)`;
    minuteEl.style.transform = `rotate(${minutesDegree}deg)`;
    secondEl.style.transform = `rotate(${secondsDegree}deg)`;
}
setInterval(drawClock, 1000)
