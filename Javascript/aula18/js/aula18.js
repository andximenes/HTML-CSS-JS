//comando base para pegar a data
let data = new Date();
//console.log(data);

//pegando apenas o ano com quatro digitos
let ano = data.getFullYear();
//console.log(ano);

//mes atual de 0 [Janeiro] a 11 [Dezembro]
let mes = data.getMonth();
const mesesDoAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

//console.log(mesesDoAno[mes]);

//Pega o dia do mês
let dia = data.getDate();
//console.log(dia);

//Pega o dia da Semana de 0 [Domingo] a 6 [Sábado]
let diaDaSemana = data.getDay();
const semana = ["Domingo", "segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

//console.log(semana[diaDaSemana]);

//Pegando as Horas, minutos e segundos
let horas = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
//console.log(horas + ":" + minutos + ":" + segundos);

//Pegando a data no padrão Brasileiro - dia/ mês/ ano. Observando que por padrão o método também trás as horas. observe o objeto que solicitando para que as horas não sejam exibidas

//SOMENTE A DATA
let dataBr = data.toLocaleString('pt-BR', {dateStyle: 'short'});
//console.log(dataBr);

//SOMENTE AS HORAS
let horasBr = data.toLocaleString('pt-BR', {timeStyle: 'short'});
//console.log(horasBr);

//PEGAR VALORES SEPARADOS

let diaM = data.getDate();
let mesM = data.getMonth() + 1;
let anoM = data.getFullYear();

function addZero(x){
    return x < 10 ? '0' + x : ' ' + x;
}

let completeDate = addZero(diaM) + "/" + addZero(mesM) + "/" + anoM;

console.log(completeDate);

//COMPARAR DATA
let hj = new Date(); 
let vencimento = new Date(2024, 0, 15);

if(hj > vencimento){
    console.log("Conta vencida")
    let diferenca = hj.getTime() - vencimento.getTime();
    let diasParaVencer = Math.ceil(diferenca / (24 * 60 * 60 * 1000));
    console.log( "Conta vencida há " + diasParaVencer + " dias");
}else{
    //CONVERTE PARA MILISSEGUNDOS
    let diferenca = vencimento.getTime() - hj.getTime();
    //24 horas, 60 min, 60 segunDOS, 1000 milissegundos
    let diasParaVencer = Math.ceil(diferenca / (24 * 60 * 60 * 1000));
    console.log( "Conta em dias!. Faltam " + diasParaVencer + " dias para vencer")
}
