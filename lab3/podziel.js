function isNumber(n1, n2) {
    if (n1 && n2 && !isNaN(n1) && !isNaN(n2)) {
        return true;
    } else { 
        return false; 
    }
}

function podziel() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    
    if (isNumber(n1, n2) && n2 != 0)
    {
        window.alert("Wynik: " + n1/n2);
    } 
    else if (isNumber(n1, n2) && n2 == 0)
    {
        window.alert("Bład, nie dzielimy przez 0.");
    }
    else
    {
        window.alert("Wprowadzone dane są błędne.");
    }
} 
