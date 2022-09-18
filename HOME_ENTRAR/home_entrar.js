function esc_ajuda() {
    var x = document.getElementById("cadastro");
    var y = document.getElementsByClassName("texto");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  } 
  function esc_cad() {
    var x = document.getElementById("cadastro");
      x.style.display = "none";
  }
  
  function boas() {
    var senha = document.getElementById("password").value;
    if (senha.length < 8) {
         alert("A senha precisa ter pelo menos oito caracteres.");
    }else{
      alert("Seja Bem Vinda(o)");
      location.href='../CONTEUDOS/CONTEUDOSfemaeOFC.html';
    }
      
  }
  function senha() {
    var senha = document.getElementById("pass").value;
    if (senha.length == 0) {
         alert("O campo 'Senha' não pode estar vazio. ");
    }else{
      location.href='../CONTEUDOS/CONTEUDOSfemaeOFC.html';
    }
      
  }