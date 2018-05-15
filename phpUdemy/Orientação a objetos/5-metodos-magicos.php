<?php
// todos os metodos magicos começam com _ _ antes do nome.
// metodo construtor é um metodo normal, só que ele é execultado automaticamente quando a classe é instanciada. __construct
// para nao precisar dar o set em cada atributo, da pra passar o valor de cada um ja na hora de instanciar a classe (criação do objeto)

class Endereco {

    private $logradouro;
    private $numero;
    private $cidade;

    public function __construct($a, $b, $c) {   // passar os parametros a serem definidos, nao precisa ter o mesmo nome da variavel acima

        $this->logradouro = $a;
        $this->numero = $b;
        $this->cidade = $c;
    }

    public function __destruct() { // chamado quando o objeto é removido, ou quando a pagina chegar ao fim da execução ou se usar o unset. Usar o destruct para matar umas variaveis ou desconectar do banco de dados. Automatizar..

        var_dump("DESTRUIR");
    }

    public function __toString() {  // transforma a classe em string para poder dar um echo depois por ex.
        return $this->logradouro.", ".$this->numero.", ".$this->cidade;
    }

}

$meuEndereco = New Endereco("rua joao pio", "844", "Floripa");  // passar os metodos cunstrutivos

var_dump($meuEndereco);

echo $meuEndereco;

unset($meuEndereco); // aqui usando o toString, pq o echo precisa de uma string, nao da pra dar echo no objeto inteiro