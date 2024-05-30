var contador = 0; //REFERÊNCIA A QUANTIDADE DE TAREFAS CRIADAS
var input = document.getElementById("inputTarefa");
var btnAdd = document.getElementById("btn-add");
var main = document.getElementById("areaLista");


function addTarefa()
{
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value.trim();

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) &&  (valorInput !== undefined))
    {
        ++contador;

        let novoItem = 
        ` 
        <div class="item" id="${contador}">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="material-symbols-outlined">radio_button_unchecked</i>
            </div>

            <div onclick="marcarTarefa(${contador}) "class="item-nome">
                ${input.value}
            </div>

            <div class="item-btn">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="material-symbols-outlined">delete</i>
                </button>
            </div>  
        </div>
        `

        //ADICIONA NOVO ITEM NO MAIN
        main.innerHTML += novoItem;
        
        //LIMPA O CAMPO INPUT
        input.value = "";
        input.focus();
    }
}


//ATIVANDO O ENTER DO TECLADO PARA ENVIAR UM NOVA TAREFA
input.addEventListener("keyup", function(event){
    //SE TECLOU O ENTER (13)
    if(event.keyCode === 13)
    {
        event.preventDefault();
        btnAdd.click();
    }
})

//DELETA UMA TAREFA
function deletar(id)
{
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

//SELECIONAR UMA TAREFA
function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icone = document.getElementById('icone_' + id);

    // Verifica se a tarefa já está marcada
    if (item.classList.contains('clicado')) {
        // Se estiver marcada, desmarca
        item.classList.remove('clicado');
        icone.textContent = "radio_button_unchecked";
        
    } else {
        // Se não estiver marcada, marca
        item.classList.add('clicado');
        icone.textContent = "check_circle";
        //MOVE O INTEM MARCADO PARA O FINAL DA LISTA
        item.parentNode.appendChild(item);
    }
}


