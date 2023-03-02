<html>
<head>
<body>

<style>
  table, th, td {
    border: 1px solid
  }
  table {
    text-align: center
  }
  </style>

<?php

$stringfromfile = file_get_contents("hurricanes.csv");
$ele = explode("\n", $stringfromfile);

echo("<table>");

for ($n = 0; $n<count($ele); $n++) {
    $values = array_values($ele)[$n];
    $ele2 = explode(", ",$values);
    echo("<tr>");
    for ($x = 0; $x<13; $x++)   {
        echo("<td>");
        echo(array_values($ele2)[$x]);
        echo("</td>");
    }
    echo("</tr>");
}

echo("</table>");

// fclose($myfile);
?>

</body>
</head>
</html>