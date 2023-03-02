<!DOCTYPE html>
<html>
<body>

<?php

function addTwoNums($x, $y)	{
	$res = $x + $y;
    return $res;
}

echo addTwoNums(3,5);
echo ("<br>");

$tab  = array(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0);

function arrayFlip(array $array) {
	return array_reverse($array, true);
}

print_r (arrayFlip($tab));

echo("<br>");

function commaAdd(array $array) {
    return $commed = implode(', ', $array);
}

print_r (commaAdd($tab));

?>

</body>
</html>