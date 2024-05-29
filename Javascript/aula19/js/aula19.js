//objeto
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

//converte objeto para texto
let txt = JSON.stringify(carro);
document.getElementById("area").innerHTML = txt;

//Converte texto para Objeto novamente
let obj = JSON.parse(txt);
console.log(obj.modelo);


//FAZENDO UMA REQUISIÇÃO REMOTA PARA UM SITE
const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');

ajax.send();

// ajax.onload = function(){
//     document.getElementById("area").innerHTML = this.responseText;

//     //convertendo texto para objeto
//     let obj = JSON.parse(this.responseText);
//     console.log(obj.ddd);
// }

//outra maneira
function buscarCep(){
    let campoTexto = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ campoTexto + '/json/');

    ajax.send();

    ajax.onload = function(){

        document.getElementById("texto"). innerHTML = this.responseText;

        //filtrando para que seja visualizado apenas os dados importantes
        let obj = JSON.parse(this.responseText); //converte para objeto
        //peguei os valores que eu queria
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById("texto"). innerHTML = "logradouro: " + logradouro + "<br>Cidade: " + cidade + "<br>Estado: " + estado;
    }
}
