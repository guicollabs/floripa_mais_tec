const todo = document.getElementById('todo')
const pesquisar = document.getElementById('pesquisar')
const listaTodos = document.getElementById('todos')

const botaoPesquisar = document.getElementById('botao-pesquisar')
const limparPesquisar = document.getElementById('limpar-pesquisar')
const adicionar = document.getElementById('adicionar')

const todos = []

adicionar.addEventListener('click', (e) => {
    e.preventDefault()
    adicionarTodo()
})

botaoPesquisar.addEventListener('click', (e) => {
    e.preventDefault()
    listarTodos(pesquisarTodo(pesquisar.value))
})

limparPesquisar.addEventListener('click', (e) => {
    e.preventDefault()
    pesquisar.value = ''
    listarTodos(todos)
})

function adicionarTodo(){
    if(!todo.value){
        alert('Digite uma tarefa.')
        return
    }

    todos.push(todo.value)
    todo.value = ''
    todo.focus()
    listarTodos(todos)
}

function listarTodos(lista){
    if(lista.length === 0){
        listaTodos.innerHTML = "Nenhuma tarefa disponível."
        return
    }

    listaTodos.innerHTML = ''

    lista.forEach(item => {
        let li = document.createElement('li')
        li.innerHTML = `
        <span>${item}</span>
        <span>
            <i class="fa-solid fa-trash"></i>
        </span>`
        listaTodos.append(li)
    })
}

function pesquisarTodo(valor){
    if(!valor){
        alert('Digite o nome da tarefa.')
        return
    }

    return todos.filter(item => item.toUpperCase() === valor.toUpperCase())
}

listaTodos.addEventListener('click', (e) => {
    if(e.target.nodeName === "I"){
        const indice = todos.indexOf(e.target.parentNode.parentNode.textContent.trim())
        todos.splice(indice, 1)
        listarTodos(todos)
    }
})

listarTodos(todos)



