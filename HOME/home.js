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
  function duvidas() {
    var x = document.getElementById("duvida");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }