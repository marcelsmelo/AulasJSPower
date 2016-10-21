function validarForm(){
	let form = document.forms['formPrincipal']
	let formOk = true;

	if(!validarElementoNome()){
		console.log("Nome Errado manolo");
		formOk = false;
	}
	if(!validaElementoIdade()){
		console.log("Menor de idade vai pro shopping");
		formOk = false;
	}
	if(!validaElementoCidades()){
		formOk = false;
	}
	if(!validaElementoSexo()){
		console.log("Sexo escolhido");
		formOk = false;
	}
	if(!validaElementoLinguas()){
		formOk = false;
	}

	if(formOk) return true;
	else return false;
}

function validarElementoNome(){
	let elementoNome = document.forms['formPrincipal'].nome;
	if(validaNome(elementoNome.value)){
		elementoNome.classList.remove("error");
		return true;
	}
	else{
		elementoNome.classList.add("error");
		return false;
	}
}

function validaElementoIdade(){
	let elementoIdade = document.forms['formPrincipal'].idade;
	if(validaIdade(elementoIdade.value)){
		 elementoIdade.classList.remove("error");
		 return true;
	}
	else{
		elementoIdade.classList.add("error");
		return false;
	}
}

function validaElementoCidades(){
	let elementoCidades = document.forms['formPrincipal'].cidades;
	let indexSelecionado = elementoCidades.selectedIndex;

	if(elementoCidades.selectedIndex == 0) {
		elementoCidades.classList.add("error")
		return false;
	}else{
		elementoCidades.classList.remove("error")
		return true;
	}
}

function validaElementoSexo(){
	let elementosRadio = document.forms['formPrincipal'].sexo;
	let radioSelecionado = elementosRadio.value;
	let divRadio = document.querySelector(".sexo");
	if(radioSelecionado != ""){
		divRadio.classList.remove("error")
		return true;
	}else{
		divRadio.classList.add("error")
		return false;
	}
}

function validaElementoLinguas(){
	let elementosCheck = document.forms['formPrincipal'].linguas;
	let divRadio = document.querySelector(".linguas");
	for(let i=0 ; i<elementosCheck.length; i++){
		let lingua = elementosCheck[i];
		if(lingua.checked){
			divRadio.classList.remove("error")
			return true;
		}
	}
	divRadio.classList.add("error")
	return false;
}

function validaElementoCEP(){
	let elementoCep = document.forms['formPrincipal'].cep;
	let cep = elementoCep.value;
	let expressao = /(^\d{5}\-\d{3}$)|(^\d{8}$)/;
	if(expressao.test(cep)){
		elementoCep.classList.remove("error")
		return true;
	}else{
		elementoCep.classList.add("error")
		return false;
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
