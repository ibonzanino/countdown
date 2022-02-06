const times = document.getElementById("times");
const launch = new Date(2022, 1, 12, 0, 0, 0).getTime();

function countDown() {
    const now = new Date().getTime();
    const diff = launch - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const daysDiff = Math.floor(diff / day);
    const hoursDiff = Math.floor((diff % day) / hour);
    const minutesDiff = Math.floor((diff % hour) / min);
    const secondsDiff = Math.floor((diff % min) / sec);
    
    times.innerHTML = `<p class="time">${daysDiff}</p>`
    times.innerHTML += `<p class="time">${hoursDiff}</p>`
    times.innerHTML += `<p class="time">${minutesDiff}</p>`
    times.innerHTML += `<p class="time">${secondsDiff}</p>`

}

setInterval(function () {
    countDown()
  }, 1000)
  