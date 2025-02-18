const lista = document.getElementById('lista')

function adicionarTarefa(){
    var tarefa = document.getElementById('tarefa_input').value
    if(tarefa != ''){
        var novaTarefa = document.createElement('li')

        var id = tarefa+Math.floor(Math.random() * 1000000)

        novaTarefa.setAttribute('id', id)

        novaTarefa.innerHTML = tarefa

        var deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('onclick', `deletarTarefa(${id})`)
        deleteBtn.setAttribute('class', 'btn-delete')
        deleteBtn.innerHTML = 'Remover'

        novaTarefa.appendChild(deleteBtn)

        lista.appendChild(novaTarefa)
    }
    
}

function deletarTarefa(id){
    lista.removeChild(id)
}
