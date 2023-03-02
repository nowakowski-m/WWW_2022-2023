INSERT INTO studenci (imie, nazwisko)
VALUES ("Michal", "Nowakowski");

INSERT INTO studenci (wiek, wydzialid)
VALUES (21, 5);

UPDATE studenci SET imie = "Maksymilian" WHERE id = 3;

SELECT * from studenci;