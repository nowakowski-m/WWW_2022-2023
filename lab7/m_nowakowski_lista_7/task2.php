<?php

$con = mysqli_connect('localhost','root','','classicmodels');

if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully<br>";

$sql = "SELECT * from products INNER JOIN productlines on products.productLine = productlines.productLine";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<br>" . "Code: " . $row["productCode"] . "\tName: " . $row["productName"] . "\tType: " . $row["productLine"] . "\tScale: " . $row["productScale"] . "\tVendor: " . $row["productScale"] . "\tDescription: " . $row["productDescription"] . "\tAmount: " . $row["quantityInStock"] . "\tBuy Price: " . $row["buyPrice"] . "\tCatalog Price: " . $row["MSRP"] . "<br>";
  }
} 

else {
  echo "0 results";
}

$con->close();

?>