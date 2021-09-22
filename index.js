let showSoccer = false;
let showVolleyball = false;
let showBlack = false;
let showSword = false;
let showEye = false;

function toggleEyeNinja () {
    let game = document.getElementById("eyeninja");
    let button = document.getElementById("eyeninja-button");
    if(!showSword) {
        game.style.display = "flex";
        button.innerHTML = "Hide";
    }
    else {
        game.style.display = "none";
        button.innerHTML = "Play";
    }
    showEye = !showEye;
}

function toggleSword () {
    let game = document.getElementById("swordgame");
    let button = document.getElementById("swordgame-button");
    if(!showSword) {
        game.style.display = "flex";
        button.innerHTML = "Hide";
    }
    else {
        game.style.display = "none";
        button.innerHTML = "Play";
    }
    showSword = !showSword;
}

function toggleBlack () {
    let game = document.getElementById("blackcircle");
    let button = document.getElementById("blackcircle-button");
    if(!showBlack) {
        game.style.display = "flex";
        button.innerHTML = "Hide";
    }
    else {
        game.style.display = "none";
        button.innerHTML = "Play";
    }
    showBlack = !showBlack;
}

function toggleSoccer () {
    let game = document.getElementById("blockball-soccer");
    let button = document.getElementById("blockball-soccer-button");
    if(!showSoccer) {
        game.style.display = "flex";
        button.innerHTML = "Hide";
    }
    else {
        game.style.display = "none";
        button.innerHTML = "Play";
    }
    showSoccer = !showSoccer;
}

function toggleVolleyball () {
    let game = document.getElementById("blockball");
    let button = document.getElementById("blockball-button");
    if(!showVolleyball) {
        game.style.display = "flex";
        button.innerHTML = "Hide";
    }
    else {
        game.style.display = "none";
        button.innerHTML = "Play";
    }
    showVolleyball = !showVolleyball;
}


