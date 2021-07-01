const clockContainer = document.querySelector(".js-clock");


function getTime() {
    const date = new Date();
    const currentHours = date.getHours(),
        currentMinutes = date.getMinutes(),
        currentSeconds = date.getSeconds();

    clockContainer.innerHTML = `Time Now ${currentHours < 10 ? `0${currentHours}`: currentHours}:${currentMinutes < 10 ? `0${currentMinutes}`: currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}`: currentSeconds}`;
}

function init() {
    setInterval(getTime, 1000);
}

init();