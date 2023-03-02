// Lista 3 - Zad 3

student = {
    imie: "Michal",
    nazwisko: "Nowakowski",
    wiek: 19,
    kierunek: "ISSP"
}
Object.values(student).join(' ');

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function sortByTittle(a, b)
{
  if (a.title > b.title)
  {
    return 1;
  }
  if (a.title < b.title)
  {
    return -1;
  } 
    return 0;
}

library.sort(sortByTittle);

readingStatus = [];
function findReadingStatus(a)
{
  if (a.readingStatus == true)
  {
    readingStatus.push(a.title);
  }
}

library.forEach(findReadingStatus);