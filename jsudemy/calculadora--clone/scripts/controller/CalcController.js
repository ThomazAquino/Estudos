// aqui vai a classe

// encapsulamento -- quem pode acessar cada atributo ou metodo, ou dar instruçoes quando alguem tentar execultar algo
// Tem 3 encapsulamentos - public: Fala com todos; Protected: Só fala com seus pares; Private: Só quem é da mesma classe fala com ele.
// Mas no js isso ainda nao funciona - existe uma convensao - se colocar _ no começo do nome é privado.
// no JS tem o DOM e o BOM browser object model. o bom mexe com refresh, maccimizar, barra de endereço
// no DOM object ==  cada TAG é um objeto
// o getelementbyid nao é mais tao usado, agr usamos o document.querySelector -- pode usar seletor de css . e # filhos e decendentes - document.querySelector("#display > .classe-filha"); -- pega o peimeiro elemento que atender a pesquisa
// dir(variavel);  -- retorna a variavel com as informaçoes de objeto
// setInterval execulta um script interminente com intervalos de milisegundos.
// setTimeOut - espera um tempoe e xeculta uma so vez um script
// split(' '); separa o que tem entre os espaços na string e transforma tudo em array
// metodo push pega um array adiciona mais uma chave no fim do array - this._operation.push(value); 
// parpu em 9:00
class CalcController {

    constructor(){                  // metodo construtor do metodo; os paranteses sao parametros do construtor, precisa. - 
        this._operation = [];
        this.locale = 'pt-BR'; // pra nao precisar digitar pt-br    ///
        this._displayCalcEl = document.querySelector("#display"); // esse EL no final do atributo é uma convensao para dizer que se refere ao elemento
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate = "";
        this.initialize();
        this.initButtonsEvents();
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

    // func de event listener personalizada para varios eventos
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false); // false pra nao acontecer 2 cliques no botao e no texto.
        });
    }

    // Botao clear all da calc (AC) limpa tudo
    clearAll(){ 
        this._operation = [];
    }
    // botao CE, tira o ultimo dogotado
    clearEntry() {
        this._operation.pop(); // pop tira a ultima chave do array
    }

    setError(){
       this.displayCalc = "ERROR";
    }

    getLastOperation(){
        return this._operation[this._operation.length-1]; // isso me da a ultima posiçao do array
    }

    // metodo substitui a ultima posiçao do array.
    setLastOperation(value) {
        this._operation[this._operation.length-1] = value;
    }

    isOperator(value){
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1)  // index of busca o valor do atributo dentro do arrauy que passei. Se dar match ele traz o index do elemento
                                                                // Se ele nao encontrar, ele vai tarzer -1. Ja te retornando isso como um if
    }

    pushOperation(value) {
        this._operation.push(value);

        if (this._operation.length > 3) { // numero + operador + numero
            
            this.calc();
            console.log(this._operation);
        }
    }

    calc(){
        let last = this._operation.pop(); // pega o quarto item do array e armazena nessa variavel
        let result = eval(this._operation.join("")); // join junta o array aspas vazias junta em nada de separaçao. se fosse barra separava com barra
        this._operation = [result, last];
    }

    setLastNumberToDisplay(){
        
    }

    addOperation(value){

        if (isNaN(this.getLastOperation())) { // se o ultimo item do array nao for numerico:
            console.log("if");

            if(this.isOperator(value)) { // verifica se é um operador
                this.setLastOperation(value); // trocar o operador. 
            } else if (isNaN(value)) {        // outro botao como ponto ou igual
                    
                    console.log(value + "entrada");
            } else {
                this.pushOperation(value);
            }
            
        } else {    // se for numerico
            if (this.isOperator(value)) {
                this.pushOperation(value);
            } else {
            let newValue = this.getLastOperation().toString() + value.toString(); // converte o lastnumb p string e soma com o digitado tb convertido em string
            this.setLastOperation(parseInt(newValue));
            this.setLastNumberToDisplay();
            }
        }

         
        console.log(this._operation);
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':
                this.addOperation('=');
                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); //O ALL no final do queryselector pega tudo e n so o primeiro item.
        
        buttons.forEach((btn, index)=>{ // se tem mais de 1 argumento tem que ter parenteses
            this.addEventListenerAll(btn, 'click drag', e=> {     // 2 parametros, o primeiro é qual evento eu quero fazer pode ser uma arrow funct ou func. o E é o parametro do arrow function. Se precisar falar sobre quem foi clicado eu chamo esse e com ponto = e.
                let textBtn = btn.className.baseVal.replace("btn-", ""); // traz so o nome da classe, e da replace de btn- pra nada.
                this.execBtn(textBtn);
            });
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
    }




    // displayTime -- Exibe a hora
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
   
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