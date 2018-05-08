<?php

class carro {
    private $modelo;


    public function getModelo() {
        return $this->modelo;
    }

    public function setModelo($modeloDigitado) {    // nos metodos que tem o set nao precisa retornar, ele só muda o atributo
        
        $this->modelo = $modeloDigitado;
    }

    public function exibir() {

        return "modelo: ".$this->getModelo();
       
    }

}

$gol = new Carro();
$gol->setModelo("Gooooool GT");



// $gol->modelo = "corsa";  --> não posso fazer isso porque o atributo é private, sód e dentro da função.
//echo $gol->modelo; --> ão posso fazer isso porque o atributo é private, se fosse public dava
print_r($gol->exibir());

