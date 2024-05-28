class Carro{
    constructor(valor1, valor2, valor3){
        this.marcar = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    ligar(){
        return this.modelo + ": ligado!";
    }
    desligar(){
        return this.modelo + ": desligado."
    }
}

const uno = new Carro("Fiat", "Uno", 2001);

console.log(uno.ligar());
