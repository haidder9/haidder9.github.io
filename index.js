console.log("Hello");
let showSoccer = false;
let showVolleyball = false;
function toggleSoccer () {
    console.log("Soccer");
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
    console.log("VolleyBall")
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
