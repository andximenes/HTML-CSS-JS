function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar..."
   tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeOut!!!";
        document.body.style.backgroundColor = "blue";
    }, 5000);
}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem.";
    document.body.style.backgroundColor = "white";
}


function ativarContagemInterval(){
   tempo = setInterval(function(){
        let cronometro = document.getElementById("tempo").innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
    }, 1000);
}
