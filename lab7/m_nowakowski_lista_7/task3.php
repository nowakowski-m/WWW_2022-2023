<?php

$con = mysqli_connect('localhost','root','','classicmodels');

if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully<br>";

$sql = "SELECT * from products INNER JOIN productlines on products.productLine = productlines.productLine";
$query = mysql_query("SELECT * from products INNER JOIN productlines on products.productLine = productlines.productLine");
$result = $con->query($sql);

// echo "<table class="striped">";
// echo "<tr class="header">";
echo "<table>"
echo "<td>Id</td>";
echo "<td>Title</td>";
echo "<td>Date</td>";
echo "</tr>";
           
    $i = 0;
    while ($row = mysql_fetch_array($query)) {
        $class = ($i == 0) ? "" : "alt";
        echo "<tr class=\"".$class."\">";
        echo "<td>".$row["productCode"]."</td>";
        echo "<td>".$row["productName"]."</td>";
        echo "<td>".$row["productLine"]."</td>";
        echo "</tr>";
        $i = ($i==0) ? 1:0;
    }

echo "</table>";

$con->close();

?>