function esc_ajuda() {
  var x = document.getElementById("auxilio");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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