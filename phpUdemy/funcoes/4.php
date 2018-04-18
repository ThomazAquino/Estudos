<?php

function soma(int ...$valores) {

    return array_sum($valores);
}

echo soma(2,2);
echo "<br>";
echo soma(25,33);
echo "<br>";
echo "<br>";
echo "<br>";


/*******************/


function soma2(float ...$valores2):float {

    return array_sum($valores2);
}

echo soma2(2.25,2);
echo "<br>";
echo soma2(25.33,33.98);