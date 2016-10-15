function oiMundo(){
	var mensagem = "<h1 style='color:red'>Hello World, mundo oi!<h1>";
	document.open();
	document.write(mensagem);
	document.close();
}

function exiba(){
	let input = document.getElementById('nome');
	const digitado = input.value;
	document.getElementById('exibir').innerHTML = '<h1>Bem vindo, '+digitado+'</h1>';
}

function teste(){
	var p = document.getElementById('paragrafo');
	p.innerHTML = '<h1>Oiiiii!!! Bora !!! BEEEEEEEEEEEERRR 1!</h1>'
}
