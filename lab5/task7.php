<html>
<body>
<?php

class Vehicle {
    public $name = '206';
    public $weight = 1100;
    public $color = 'Blue';
    public function getInfo(){
        $car = new Vehicle();
        $car2 = new Car();
        echo ("Name: " . $car->name . "<br>"
            . "Weight: " . $car->weight . "<br>"
            . "Color: " . $car->color . "<br>"
            . "Brand: ". $car2->brand . "<br>"
            . "Wheels: " . $car2->wheels );
    }
  }

  class Car extends Vehicle {
    public $brand = 'Peugeot';
    public $wheels = 'Non-market';
}

$exmple = new Car();
$exmple -> getInfo();

?>

</body>
</html>
