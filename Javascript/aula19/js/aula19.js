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

ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/'); //pega a requisição

ajax.send(); //envia uma requisição

//carrega/ recebe a RESPOSTA (this.responseText) da requisição enviada

// ajax.onload = function(){
//     document.getElementById("area").innerHTML = this.responseText;

//     //convertendo texto para objeto
//     let obj = JSON.parse(this.responseText);
//     console.log(obj.ddd);
// }

//outra maneira
function buscarCep(){
    let campoTexto = document.getElementById("cep").value; //pega o valor do input

    //faz a requisição e envia o pedido
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ campoTexto + '/json/');
    ajax.send();

    //carrega a resposta recebida
    ajax.onload = function(){
        let obj = JSON.parse(this.responseText);
    
        // Verifica se a propriedade 'erro' existe no objeto e se é verdadeira
        if(obj.erro === true){
            document.getElementById("texto").innerHTML = "Ocorreu um erro na solicitação. Não foi possível localizar esse CPF";
        } 
        else
        {
            let logradouro = obj.logradouro;
            let cidade = obj.localidade;
            let estado = obj.uf;
    
            document.getElementById("texto").innerHTML = "logradouro: " + logradouro + "<br>Cidade: " + cidade + "<br>Estado: " + estado;
            
        }
    }
    
}
