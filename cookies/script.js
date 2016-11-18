function addCookie(name, value, days){
	let dataExp = addDaysToNow(days)
	document.cookie = name +"="+ value +"; expires="+dataExp.toGMTString();
}

function addDaysToNow(days){
	let data = new Date();
	let timeToDays = data.getTime() + (days*24*60*60*1000)
	data.setTime(timeToDays);
	return data;
}

function getCookie(nome){
	let cookies = document.cookie;
	let first = cookies.indexOf(nome+'=');
	if(first>=0){
		let str = cookies.substring(first, cookies.length);
		let last = str.indexOf(';');
		if(last < 0 ) last = str.length;
		str = str.substring(0, last).split('=')
		return decodeURI(str[1])
	}else
		return null
}

function removeCookie(name){
	let dataExp = new Date(0);
	document.cookie = name+"=; expires="+dataExp.toGMTString()+"; path=/";
}

function logar(){
	let username = document.login.username.value;
	let password = document.login.password.value;
	if(username == "Marcel" && password == "senha"){
		addCookie("login", "loginOK", 100);
		return true;
	}else{
		document.querySelector(".erroLogin").innerHTML = "Usuário e/ou senha incorretos!"
		return false;
	}
}

function verificaLogado(){
	let valorCookie = getCookie("login");
	if(valorCookie == null) return false;
	else{
		if(valorCookie == "loginOK"){
			return true;
		}else{
			return false;
		}
	}
}

function verificaTelaLogin(){
	if(verificaLogado()){
		window.location = '/admin.html'
	}
}

function verificaTelaAdmin(){
	if(!verificaLogado()){
		window.location = '/login.html'
	}
}

function deslogar(){
	removeCookie('login');
	window.location = '/login.html'
}
