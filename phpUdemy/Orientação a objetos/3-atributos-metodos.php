<?php

class Carro {
    private $modelo;  
    private $motor;
    private $ano;
    // Existem metodos chamados getters e seters -> pegar o valor ou definir os valores do atributo
    // Aqui para cada atributo vai ter 2 metodos um pra pegar e outro p definir o valor.
    public function getModelo() {   // função para pegar // convenção para nomes
        return $this->modelo;
    }

    public function setModelo($modeloDigitado) {    // nos metodos que tem o set nao precisa retornar, ele só muda o atributo
        
        $this->modelo = $modeloDigitado;
    }
    //

    public function getMotor() {
    
        return $this->motor;
    }

    public function setMotor($motor){

        $this->motor = $motor;
    }
    //

    public function getAno() {
    
        return $this->ano;
    }

    public function setAno($ano){

        $this->ano = $ano;
    }

    public function exibir() {

        return array(
            "modelo"=>$this->getModelo(),
            "motor"=>$this->getMotor(),
            "ano"=>$this->getAno()
        );
    }
}

$gol = new Carro();
$gol->setModelo("Gol GT");
$gol->setMotor("1.6");
$gol->setAno("2017");


print_r($gol->exibir());










?>