<html>
<head>
<body>

<?php

$array = ['Poland' => 'Warsaw', 'Italy' => 'Rome', 'United Kingdom' => 'London', 
'Netherlands' => 'Amsterdam', 'Germany' => 'Berlin'];

echo("<ul>");

for ($n = 0; $n<count($array); $n++) {
    echo("<li>");
    print_r(array_keys($array)[$n]." - ". array_values($array)[$n]);
    echo("</li>");
}

echo("</ul>");

?>

</body>
</head>
</html>