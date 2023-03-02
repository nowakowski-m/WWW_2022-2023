// Lista 3 - Zad 4

args = [1, 19, 31, 76, 91, 102];
function suma(...args)
{
  let startNum = 0;
  for (const arg of args){
    startNum += arg;
  }
  return startNum;
}
console.log(suma(...liczby));

let a, b, newLiczby;
[a, b, ...newLiczby] = liczby;