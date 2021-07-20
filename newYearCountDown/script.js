// html components
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const happyNewYearEl = document.getElementById('newyear');

const currentYearEve = "31 Dec " + new Date().getFullYear(); 

function countDown() {
    const newYearEve = new Date(currentYearEve);
    const currentDate = new Date();
    
    const diff = Math.abs(newYearEve - currentDate) / 1000;

    let daysDif = Math.floor(diff / 3600 / 24);
    let hoursDif = Math.floor(diff / 3600) % 24;
    let minutesDif = Math.floor(diff / 60) % 60;
    let secondsDif = Math.floor(diff)% 60;
    

    days.innerHTML = daysDif;
    hours.innerHTML = formatTime(hoursDif);
    minutes.innerHTML = formatTime(minutesDif);
    seconds.innerHTML = formatTime(secondsDif);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time
    }
    
    if(daysDif === 0 && hoursDif === 0 && minutesDif === 0 && secondsDif === 0) {
        happyNewYearEl.innerHTML = "HAPPY NEW YEAR!"
    }

}
countDown()
setInterval(countDown, 1000);