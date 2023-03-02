
function increaseFont() {
    let el = document.getElementById("textToChange");
    let size = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
    
    el.style.fontSize = (size + 2) + "px";
}

let bClick = false;

function changeFontColor() {
    let el = document.getElementById("textToChange");
    
    if (!bClick) {
        el.style.color = "red";
        bClick = true;
    }
    
    else {
        el.style.color = "black"
        bClick = false;
    }
} 