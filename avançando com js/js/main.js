// cada objeto sera um produto 

var list = [ // dentro desse array vai varios objetos
		{"desc":"rice","amount":"1","value":"5.40"},
		{"desc":"beer","amount":"12","value":"1.99"},
		{"desc":"meat","amount":"1","value":"15.00"}
];

function getTotal(list) {
	var total = 0; // o tal inicialmente é 0
	for(var key in list) { // cada objeto da lista vai ser uma 'key'
		total += list [key].value * list[key].amount;
	}
	return total;
}

function setList(list){
	var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
	for(var key in list){
			table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button class="btn btn-default" onclick="setUpdate('+key+');">Edit</button> | Delete</td></tr>';
	}
	table += '</tbody>';
	document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc){// vai receber a descrição e entregar formatada
	var str = desc.toLowerCase(); // primeiro deixa td minusculo
	str = str.charAt(0).toUpperCase() + str.slice(1); // Traz o 1º caractere da string / Transforma em maiusculo / slice traz o resto da string

	return str;

}

function  formatValue(value){
	var str = parseFloat(value).toFixed(2) + ""; // transformou de sttring para flota e dissse que só quer 2 numeros depois do . Depois vira string novamente
	str = str.replace(".",","); // replace o . por ,
	str = "$ " + str; // colocou uma string $ antes 
	return str;
}


function addData () {
var desc = document.getElementById("desc").value; // . value pega o valor do input e atribui para a variavel
var amount = document.getElementById("amount").value;
var value = document.getElementById("value").value;

list.unshift({"desc":desc , "amount":amount, "value":value });  // unshift adiciona o item por primeiro na lista
setList(list); // para setar a tabela novamente

}

function setUpdate(id) { // replace de uma linha para edição
	var obj = list[id]; // essa variavel vai receber um objeto da lista. Que rebe o ID dentro dela
	document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

function resetForm(){
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
}

function updateData(){
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc":desc, "amount": amount, "value":value };
    resetForm();
    setList(list);

}

setList(list);
console.log(getTotal(list));


