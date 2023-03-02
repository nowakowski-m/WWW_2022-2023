-- mialem problemy z polskimi znakami w nazwach kategorii w tabelach, dlatego napisalem je troche
-- inaczej niz w zadaniu bylo powiedziane, bo inaczej dostawalem errory i nie widzialem rezultatow
DROP TABLE IF EXISTS studenci;
FLUSH TABLES studenci;

CREATE TABLE studenci (
  id INT AUTO_INCREMENT PRIMARY KEY,
  imie VARCHAR(50),
  nazwisko VARCHAR(50),
  wiek SMALLINT,
  wydzialid SMALLINT
) 

ENGINE=InnoDB
DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS wydzial;
FLUSH TABLES wydzial;

CREATE TABLE wydzial (
  id SMALLINT AUTO_INCREMENT PRIMARY KEY,
  nazwa VARCHAR(255),
  rokzalozenia SMALLINT
)

ENGINE=InnoDB
DEFAULT CHARSET=latin1;

ALTER TABLE studenci
ADD FOREIGN KEY (wydzialid) REFERENCES wydzial(id) ON DELETE NO ACTION