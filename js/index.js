var nome = "Zaynne Silva";
var cargo = "Estudande de Programação";

var nomehtml = document.getElementById ("nome-no-html");
var cargohtml = document.getElementById ("cargo-no-html");
var text1 = document.getElementById ("text-1");
var text2 = document.getElementById ("text-2");

function colocarNomeNoHtml (nome){
nomehtml.innerHTML = nome;
}

function colocarCargoNoHtml (cargo) {
    cargohtml.innerHTML = cargo;
}

function logarNome(nome) {
    console.log (nome);
}

function clickNoProjetos() {
    console.log ("clicou no botão Projetos");
    text2.style.display = "block";
    text1.style.display = "none";
}

function clickNoSobre() {
    console.log ("clicou no botão Sobre");
    text1.style.display = "block";
    text2.style.display = "none";
}

colocarNomeNoHtml (nome);
colocarCargoNoHtml (cargo);