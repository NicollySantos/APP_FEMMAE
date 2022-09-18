
function toggle() {
    var x = document.getElementById("togou");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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
/*function aplicar(){
    var inputVal = document.getElementById("mss").value;

    var x = document.getElementById("teste");
    if (x.innerHTML === "") {
        x.innerHTML = inputVal;
    } else {
        x.innerHTML = inputVal;
    }
}*/
/*window.onload = function (){
    var hideMe = document.getElementById('togou');
    document.onclick = function(e){
       if(e.target.id !== 'togou'){
          hideMe.style.display = 'none';
       }
    };
 };*/
