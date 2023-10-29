const button = document.querySelector('.button')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-tasks')

let myListOfItens = []

function addNewTask() {
    const newTask = input.value.trim();

    if(newTask !== "") {
    myListOfItens.push({
        task: newTask,
        completed: false,
    })
    input.value = ''
    showTasks()
} else {
    alert("Por favor, insira uma tarefá válida")
}

}

function showTasks() {

    let newList = ''
    myListOfItens.forEach((item, position) => {

    newList = newList + ` 
    <li class="task ${item.completed && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" class="checked" onclick = "completeTask(${position})">
        <p>${item.task}</p>
        <img 10 src="./img/delete.png" alt="tarefa-para-lixo" class="delete" onclick = "deleteItems(${position})">
    </li> 
`

})

completeList.innerHTML = newList
localStorage.setItem('list', JSON.stringify(myListOfItens))
}

function completeTask (position) {
    myListOfItens[position].completed = !myListOfItens[position].completed
    showTasks()
    console.log(position, completed)

}

function deleteItems(position){
    myListOfItens.splice(position, 1)
    showTasks()
}

function reloadTask(){
    const tasksLocalStorage = localStorage.getItem('list')

    if(tasksLocalStorage){
    myListOfItens = JSON.parse(tasksLocalStorage)}

    showTasks()
}

reloadTask()

button.addEventListener('click', addNewTask)
