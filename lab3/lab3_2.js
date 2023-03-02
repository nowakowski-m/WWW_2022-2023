// Lista 3 - Zad 2

a = ["Quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
console.log(a.join(''));
a.length

b = ["Plum", "Orange", "Apple", "Gooseberry", "Pear", "Pineapple"]
b.sort();
b.splice(b.indexOf("Apple"), 1);
b.splice(b.indexOf("Orange"), 1);

const numbersString = '0,1,1,2,3,5,8,13,21';
let cyfry = numbersString.split(",");

cyfry = cyfry.map(function (item) { 
    return parseInt(item, 10); 
});

suma = 0;
cyfry.reduce ((x,y) => x+y, suma);