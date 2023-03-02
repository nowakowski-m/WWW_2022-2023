<html>
<body>

<form action="task8.php" method="post">
    <p>Imię: <input type="text" name="fname" /></p>
    <p>Nazwisko: <input type="text" name="lname" /></p>
    <p>Email: <input type="email" name="email" /></p>
    
    <p>Zainteresowania:</p>
    <p>
        <select name="Zainteresowania">
            <option value="Gry">Gry</option>
            <option value="Książki">Książki</option>
            <option value="Muzyka">Muzyka</option>
            <option value="Film">Film</option>
            <option value="Sztuka">Sztuka</option>
        </select>
    </p>
    <p><input type="submit" value='Subskrybuj'/></p>
    
</form>

<?php 

    error_reporting(0); 
    echo "Imię: " . $_POST["fname"];
    echo("<br>");
    echo "Nazwisko: " . $_POST["lname"];
    echo("<br>");
    echo "E-mail: " . $_POST["email"];
    echo("<br>");
    echo "Zainteresowania: " . $_POST["Zainteresowania"];

?>

</body>
</html>
