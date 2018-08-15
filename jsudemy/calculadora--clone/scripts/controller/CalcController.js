// aqui vai a classe

// encapsulamento -- quem pode acessar cada atributo ou metodo, ou dar instruçoes quando alguem tentar execultar algo
// Tem 3 encapsulamentos - public: Fala com todos; Protected: Só fala com seus pares; Private: Só quem é da mesma classe fala com ele.
// Mas no js isso ainda nao funciona - existe uma convensao - se colocar _ no começo do nome é privado.
// no JS tem o DOM e o BOM browser object model. o bom mexe com refresh, maccimizar, barra de endereço
// no DOM object ==  cada TAG é um objeto
// o getelementbyid nao é mais tao usado, agr usamos o document.querySelector -- pode usar seletor de css . e # filhos e decendentes - document.querySelector("#display");
// dir(variavel);  -- retorna a variavel com as informaçoes de objeto
// setInterval execulta um script interminente com intervalos de milisegundos.
// setTimeOut - espera um tempoe e xeculta uma so vez um script


class CalcController {

    constructor(){                  // metodo construtor do metodo; os paranteses sao parametros do construtor, precisa. - 
        this.locale = 'pt-BR'; // pra nao precisar digitar pt-br    ///
        this._displayCalcEl = document.querySelector("#display"); // esse EL no final do atributo é uma convensao para dizer que se refere ao elemento
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate = "";
        this.initialize();
    }

    initialize(){       // fiz esse metodo - aqui vai tudo que acontece quando a calc inicia--- depois eu chamo ali ali em cima no construtor, 
                        //porque o construtor é chamado automaticamente

        this.setDisplayDateTime();

        setInterval(()=> { //funcao executada em intervalo de tempo em milisegunds. Dentro dela eu coloquei uma ero function
            this.setDisplayDateTime();

        }, 1000);    // esse segundo parametro é do setInterval, intervalo entre as execuçoes. 1s
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    // displayTime -- Exibe a hora
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    ////
//
    // displayDate -- exibe a data
    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    // DisplayCalc
    get displayCalc(){ // metodo get - pega 
        return this._displayCalcEl.innerHTML; // devolve/retorna -- innerHTML altera no HTML
    }

    set displayCalc(value){ // seta
        this._displayCalcEl.innerHTML = value; // value do parametro - grava o value no atributo -- SET nao tem return, tem atribuiçao do value, poderia até ter, ams n precisa
    }

    get currentDate(){
        return new Date(); // ja temos uma classe date nativa do JS
    }

    set currentDate(value){
        this._currentDate = value;
    }
}