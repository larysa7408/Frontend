// * 2
// setInterval () метод когда мы хотим чтобы данные повторялись  и будет продолжаться пока мы его не остановим

// ! чтобы иметь возможность остановить интервал его кладут в переменную и после используют clearInterval()
const interval = setInterval(() => {
    console.log('Tick!'); // записали интервал
}, 3000);  // пердали значение через какое у нас должеп быть тик
// чтобы остановить интервал нужно поместить в переменную const interval

// мы передаем первым параметром стрелочную функцию, вторым - время через которое будет происходить действие
setTimeout(()=>{
    // чтобы остановить interval передаем его аргументом в clearInterval()
    clearInterval(interval);// (interval) даем значение начего интервала 
},10000) // останавливаем интервал через 10 секунд


// setInterval() и setTimeout() называют макрозадачами 
// они имееют наименьший приоритет для выполнения по сраснению с синхронным кодом и особый вид ассинхронного кот имеет приоритет выше они выполнятся самыми последними