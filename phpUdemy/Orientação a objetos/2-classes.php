<?php

class Pessoa { //palavra reservada class. Convenção para o nome de classes: Primeira letra sempre maiuscula, se tiver mais de um nome a quebra de palavras é maiuscula.
    //aqui vai o interior da classe: Atributos e métodos

    public $nome = "Thomaz"; // public = palavra reservada para encapsulamento. (Atributo) // public, private ou protected

    public function falar() {  // (Método)
        return "O meu nome é ".$this->nome;   // $this-> (USAR DENTRO DE UM METODO) Representação da classe ja instanciada, ou seja o objeto (professor da classe). O $This faz o papel de $ da variavel, toda vez que quiser consultar um atributo dentro de um metodo usar $This->nome. Se tiver fora pode ir direto com $nome sem o $this->nome
    }
}
//fora da classe

$glaucio = new Pessoa(); // novo  representante da classe
//$glaucio->nome = "Gaucio Daniel"; // acessando o atributo pelo representante
echo $glaucio->falar(); // Echo no return do metodo
echo "<br />" .$glaucio->nome;