function testeArray(){
	var array = [];
	array['marcel'] = 'melo';
	array['joao'] = 'silva';
	array['sexta'] = 'noite';
	array.noite = 'sexta';

	for(let i=0; i<array.length; i++){
		let value = array[i]
		console.log('FOR '+value);
	}

	for(let x in array){
		let value = array[x];
		console.log('FOR/IN - Chave-'+ x +' valor-' + value);
	}
	console.log(array);
}

function calculaRelacao(){
	let alcool = document.querySelector("input[name='alcool']").value;
	let gasolina = document.querySelector("input[name='gasolina']").value;

	let valorAlcool = parseFloat(alcool);
	let valorGasolina = parseFloat(gasolina);

	let resultado = valorAlcool / valorGasolina;
	resultado = resultado.toFixed(8);
	console.log(resultado)

	let campoResultado = document.getElementById('resultado');
	if(resultado > 0.7){
		campoResultado.innerHTML = 'RESULTADO:'+resultado+'<br />Vai de gasosa chapa!'
	}else if(resultado == 0.7){
		 campoResultado.innerHTML ='RESULTADO:'+resultado+'<br /> Tanto faz, patrão!'
	}else{
		 campoResultado.innerHTML ='RESULTADO:'+resultado+'<br />Vai de alcool chapa! '
	}

}
function chamarFuncao(){
	getMax(1,4,6,7,89,0,442,214,6,7,8,90,5);
}


function getMax(){
	let i, max = 0;
	for(i=0; i<arguments.length; i++){
		if(arguments[i]>max)
		 	max = arguments[i]
	}
	console.log('Valor Máximo '+max)
}

function somaFunction(a,b){
	return a+b;
}

var somar = function(a,b){
	return a+b;
}

var somarObjeto = new Function('a','b','return a+b;')

var somarReduzido = (a,b)=>{
	a+b
}
