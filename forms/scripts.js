function validarForm(){
	let form = document.forms['formPrincipal']
	let formOk = true;

	if(!validaNome(form.nome.value)){
		console.log("Nome Errado manolo");
		formOk = false;
	}
	if(!validaIdade(form.idade.value)){
		console.log("Menor de idade vai pro shopping");
		formOk = false;
	}

	if(formOk) return true;
	else return false;
}

function validarElementoNome(){
	let elementoNome = document.forms['formPrincipal'].nome;
	if(validaNome(elementoNome.value)) elementoNome.classList.remove("error");
	else elementoNome.classList.add("error");
}

function validaElementoIdade(){
	let elementoIdade = document.forms['formPrincipal'].idade;
	if(validaIdade(elementoIdade.value)) elementoIdade.classList.remove("error");
	else elementoIdade.classList.add("error");
}

function validaElementoCidades(){
	let elementoCidades = document.forms['formPrincipal'].cidades;
	let indexSelecionado = elementoCidades.selectedIndex;
	elementoCidades.options[elementoCidades.length] = new Option("Rio de Janeiro", "RJ");


	if(elementoCidades.selectedIndex == 0) {
		elementoCidades.classList.add("error")
	}else{
		elementoCidades.classList.remove("error")
	}
}


function validaNome(nome){
	if(nome == '' || nome == undefined) return false;
	else if(nome.length < 6 || nome.length > 10) return false;
	else return true;
}

function validaIdade(idade){
	if(idade < 18) return false
	else return true;
}
