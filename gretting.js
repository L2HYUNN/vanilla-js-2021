const form = document.querySelector(".js-name"),
    title = document.querySelector("h1"),
    input = document.querySelector("input"),
    button = document.querySelector(".js-rename");

const USER_LS = "User",
    HIDE_CL = "js-remove";

function handleSubmit(e) {
    e.preventDefault();
    const userName = input.value;
    localStorage.setItem(USER_LS, userName);
    title.innerHTML = `Welcome and Hello ${userName}!`;
    form.classList.add(HIDE_CL);
    button.classList.remove(HIDE_CL);
}

function paintName() {
    form.addEventListener("submit",handleSubmit);
}

function loadName() {
    const userName = localStorage.getItem(USER_LS);
    
    if(userName === null) {
        paintName();
    } else{
        title.innerHTML = `Welcome and Hello ${userName}!`;
        form.classList.add(HIDE_CL);
        button.classList.remove(HIDE_CL);
        paintName();
    }
    
}

function handleclick() {
    button.classList.add(HIDE_CL);
    form.classList.remove(HIDE_CL);
    title.innerHTML = "What's your name?";
    input.value = null;
}


function init() {
    loadName();
    button.addEventListener("click", handleclick);

}

init();