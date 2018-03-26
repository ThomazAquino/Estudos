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
			table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete</td></tr>';
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



setList(list);
console.log(getTotal(list));


