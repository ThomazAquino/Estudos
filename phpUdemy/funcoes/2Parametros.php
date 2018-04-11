<?php

function ola($texto = "mundo", $periodo="Bom dia") { // por padrao o parametro é mundo, ams pode mudar.
   return "ola $texto! $periodo! <br />";
}
echo ola();
echo ola("Aquino");
echo ola("", "Boa noite"); // string vazia
echo ola("Joao", "");

/* ================================= */

function teste() {
        $argumentos = func_get_args(); //essa funcao retorna em um array todos argumentos de parametros dessa funcao
}

var_dump(ola("LOREM IPSUM", 10));