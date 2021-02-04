let showSoccer = false;
let showVolleyball = false;
let showBlack = false;

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


