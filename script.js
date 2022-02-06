const times = document.getElementById("times");
const launch = new Date(2022, 1, 12, 0, 0, 0).getTime();

function countDown() {
    const now = new Date().getTime();
    const diff = launch - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    let daysDiff = Math.floor(diff / day);
    let hoursDiff = Math.floor((diff % day) / hour);
    let minutesDiff = Math.floor((diff % hour) / min);
    let secondsDiff = Math.floor((diff % min) / sec);

    if (daysDiff < 10) {
        daysDiff = '0' + daysDiff;
    }
    if (hoursDiff < 10) {
        hoursDiff = '0' + hoursDiff;
    }
    if (minutesDiff < 10) {
        minutesDiff = '0' + minutesDiff;
    }
    if (secondsDiff < 10) {
        secondsDiff = '0' + secondsDiff;
    }
    
    times.innerHTML = `<p class="time">${daysDiff}&nbsp;&#58;</p>`
    times.innerHTML += `<p class="time">&nbsp;${hoursDiff}&nbsp;&#58;</p>`
    times.innerHTML += `<p class="time">&nbsp;${minutesDiff}&nbsp;&#58;</p>`
    times.innerHTML += `<p class="time">&nbsp;${secondsDiff}</p>`

}
countDown();

setInterval(function () {
    countDown()
  }, 1000)
