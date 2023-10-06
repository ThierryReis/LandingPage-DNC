var SetaEsquerda = window.document.getElementById ("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById ("bruna")
var samantha = window.document.getElementById ("samantha")
var SetaDireita = window.document.getElementById ("seta-direita")

function rolarparadireita() {
    leonardo.style = "display:none"
    samantha.style = "display:flex" 
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function rolarparaesquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}