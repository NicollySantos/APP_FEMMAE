var cor = window.document.getElementsById('capa') //n é recomendado colocar fora por questões de memória
azul.addEventListener('click', azul)
    function azul() {
        capa.style.background = '#44c4ff'
    }
amarelo.addEventListener('click', amarelo)
    function amarelo() {
        capa.style.background = '#f0fa65'
    }
roxo.addEventListener('click', roxo)
    function roxo() {
        capa.style.background = '#cd47df'
    }
rosa.addEventListener('click', rosa)
    function rosa() {
        capa.style.background = '#ff3175'
    }
vermelho.addEventListener('click', vermelho)
    function vermelho() {
        capa.style.background = '#ff2f2f'
    }
verde.addEventListener('click', verde)
    function verde() {
        capa.style.background = '#82ff6a'
    }
function aplicar(){
    var inputVal = document.getElementById("arquivo").value;
    
    var x = document.getElementById("capa_texto");
    if (x.innerHTML === "") {
        x.innerHTML = inputVal;
    } else {
        x.innerHTML = inputVal;
    }
}
function esc_ajuda() {
    var x = document.getElementById("auxilio");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }  
function mudaFonte() {
        var x = document.getElementById("fonte").value;
        document.getElementById("capa_texto").style.fontFamily = x;
     }
function mudaTamanho() {
        var x = document.getElementById("tam").value;
        document.getElementById("capa_texto").style.fontSize = x;
     }
function duvidas() {
    var x = document.getElementById("duvida");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function fecha()
{
var resposta = confirm("Deseja mesmo sair?");
  if(resposta)
    location.href='../HOME/home.html';
  else
    return false;
}