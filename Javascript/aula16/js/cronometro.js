var cronometro;
var segundos = 0;
var minutos = 0;
var horas = 0;

function iniciar(){
    cronometro = setInterval(function(){
        document.getElementById("segundos").innerHTML = String(segundos).padStart(2, '0');
        document.getElementById("minutos").innerHTML = String(minutos).padStart(2, '0');
        document.getElementById("horas").innerHTML = String(horas).padStart(2, '0');

        segundos ++;
        
        if(segundos == 60){
            segundos = 0;
            minutos ++;
        }

        if(minutos == 60){
            minutos = 0;
            horas ++;
        }
      
    }, 1000);
}

function parar(){
    clearInterval(cronometro);
}

function continuar(){
    iniciar();
}
function zerar(){
    clearInterval(cronometro);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById("segundos").innerHTML = String(segundos).padStart(2, '0');
    document.getElementById("minutos").innerHTML = String(minutos).padStart(2, '0');
    document.getElementById("horas").innerHTML = String(horas).padStart(2, '0');
}


