// Lista 3 - Zad 6

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function color() {
    let r = randomInt(0,256);
    let g = randomInt(0,256);
    let b = randomInt(0,256);
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    document.getElementById("color").style.color = "rgb("+r+","+g+","+b+")";
}