const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABCD-1234",

    buzina: function(){
        alert("buzinou!");
    }
    ,

    completo: function(){
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`;
    }
};

//primeira maneira
//console.log(carro.marca);

//segunda opção
//console.log(carro["marca"]);

//chamando o método
//carro.buzina();
console.log(carro.completo());