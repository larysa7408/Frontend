const now=new Date();
const deadline = new Date(now.getHours(),now.getMinutes(),now.getSeconds(),18,30,0)

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
};
getTimeRemaining(deadline).minutes

function startButton(id, endtime) {
    const timer = document.getElementById(id);
    const timeinterval = setInterval(function () {
        const t = getTimeRemaining(endtime);
        timer.innerHTML =
            'hours: ' + t.hours +
            'minutes: ' + t.minutes +
            'seconds: ' + t.seconds;

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}
startButton('timer',deadline)