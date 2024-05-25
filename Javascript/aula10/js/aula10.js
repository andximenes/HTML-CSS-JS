function oneClick(){
    document.getElementById("txt").innerHTML = "Clicou!!!";
}

function dbClick(){
    document.getElementById("txt").innerHTML = "Clique duplo";
}

// funções para os Eventos onmouseover e onmouseout
function vermelho(){
    let div = document.getElementById("mouse_over_out");
    div.style.backgroundColor = "red";
}

function azul(){
    let div = document.getElementById("mouse_over_out");
    div.style.backgroundColor = "blue";
}

//fim

// Função para onmousemove
function addTxt(){
    let p = document.getElementById("txt");
    p.append("O mouse moveu");
}

//Função para o evento de onfocus
function limpaTxt(){
    document.getElementById("cxTxt").value = "";
}