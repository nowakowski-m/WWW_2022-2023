function tableCreate() {
    const body = document.body,
            tbl = document.createElement('table');
    tbl.style.width = '1000px';
    tbl.style.border = '1px solid black';

    const tr = tbl.insertRow();
    const td = tr.insertCell();
    const data1 = document.getElementById("fname").value
    const data2 = document.getElementById("lname").value
    const data3 = document.getElementById("age").value
    // const data4 = document.getElementById("email").value
    // const data5 = document.getElementById("gender").value
    // const data6 = document.getElementById("studies_begin").value
    // const data7 = document.getElementById("schools").value

    // tu zakomentowane nie działają, nie wiem dlaczego bo są zrobione analogicznie
    // do reszty która działa, być może to z powodu zbyt dużej ilości elementów,
    // nie mogę do tego dojść, i nie dałem rady też z przyciskiem usuwania :(

    td.appendChild(document.createTextNode(data1 + '  '));
    td.appendChild(document.createTextNode(data2 + '  '));
    td.appendChild(document.createTextNode(data3 + '  '));
    // td.appendChild(document.createTextNode(data4 + '  '));
    // td.appendChild(document.createTextNode(data5 + '  '));
    // td.appendChild(document.createTextNode(data6 + '  '));
    // td.appendChild(document.createTextNode(data7 + '  '));
    td.style.border = '1px solid black';
    body.appendChild(tbl);
}

function dontReload() {
    event.preventDefault();
    tableCreate();
}

function validateEmail() {
    var re = /\S+\.\S+@\S+\.\S+/;
    let email_value = document.getElementById("email_text").value;
    let el = document.getElementById("email_text");
        if (re.test(email_value) == 0) {
            el.style.color = "red";
        }
        else {
            el.style.color = "black";
        }
    }