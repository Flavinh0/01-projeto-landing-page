var setaEsquerda = window.document.getElementById("seta_esquerda")
var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var Leonardo = window.document.getElementById("leonardo")
var setaDireita = window.document.getElementById("seta_direita")

function RolarParaDireita() {
  Bruna.style = "display:none"
  Leonardo.style = "display:flex"
  setaDireita.style = "display:none";
  setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
  Bruna.style = "display:flex"
  Leonardo.style = "display:none"
  setaDireita.style = "display:flex; margin-top: 55px"
  setaEsquerda.style = "display:none"
}