<!DOCTYPE html>
<html>
<body>

<?php

declare(strict_types=1);

function addTwoNums($x, $y)	{
	$res = $x + $y;
    return $res;
}

echo addTwoNums(3,5);

$tab  = array(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0);

function arrayFlip(array $array) {
	return array_reverse($array, true);
}

print_r (arrayFlip($tab));

function commaAdd(array $array) {
    return $commed = implode(', ', $array);
}

print_r (commaAdd($tab));

?>

</body>
</html>