function setOnLoad(){
	let primeira = document.querySelector(".primeira");
	let segunda = document.querySelector(".segunda");
	let teste = document.querySelector(".teste");

	primeira.addEventListener("click", clicouPrimeira, false);
	segunda.addEventListener("click", clicouSegunda, false);
	teste.addEventListener("click", clicouTeste, false);
}
function clicouPrimeira(event){
	alert("Palmeiras #87éSport #byCBF");
	event.stopPropagation();
}
function clicouSegunda(event){
	alert("Flamengo #cheirinhodeHepta");
	event.stopPropagation();
}
function clicouTeste(event){
	alert("Siga O líder e chora menos");
	event.stopPropagation();
}
document.onload = setOnLoad();
