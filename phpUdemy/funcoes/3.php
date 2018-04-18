<?php
$a = 10;

function trocaValor($a){ // Isso é passagemd e parametro por valor.
//O que acontece dentro da funcao e quando ela é chamada fica dentro dela, nao altera o valor real da variavel.
    $a = $a + 50; 
    return $a;
}

echo trocavalor($a); // valor com a funcao
echo "<br />";
echo $a; //valor original
echo "<br />";


/* ========= */

$x = 10;

function trocaValor2(&$y){ // Passagem de paramentro por referencia "&".
// a funcção vai alterar o valor real da variavel.
    $y = $y + 50; 
    return $y;
}

echo trocavalor2($x); //valor com a funcao
echo "<br />";
echo $x; // valor alterado depois da funcao