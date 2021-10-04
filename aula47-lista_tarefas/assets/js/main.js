function main() {
    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaBtnApagar(li) {
        li.innerHTML += ' ';
        const btnApagar = document.createElement('button');
        btnApagar.innerText = 'Apagar';
        btnApagar.setAttribute('class', 'apagar');
        li.appendChild(btnApagar);
    }

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(textoInput) {
       const li = criaLi();
       li.innerHTML = textoInput;
       tarefas.appendChild(li);
       limpaInput();
       criaBtnApagar(li);
       salvarTarefas();
    }

    inputTarefa.addEventListener('keypress', function(e) {
        if(e.keyCode === 13) {
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    })

    //recuperando o evento de click do btn e as informacoes inseridas no input
    btnTarefa.addEventListener('click', function(){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function addTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        
        for(let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    }
    addTarefasSalvas();
}   
main();