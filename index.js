const container = document.querySelector('.container');
const form = document.querySelector('.jsForm');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const toDoNumber = document.querySelector('.displayNumber');
let toDos = [];

function handleSubmit(event){
    event.preventDefault();
    let currentText = input.value
    input.value = "";
    createText(currentText);
}

function createText(text){
    const delBtn = document.createElement('span');
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    delBtn.innerHTML = `<i class="fas fa-check-square"></i>`;
    delBtn.addEventListener('click', deleteToDos);
    textSpan.innerHTML = text;
    textSpan.classList.add(toDos.length + 1);
    textSpan.addEventListener('click',hideText);
    ul.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(textSpan);
    const toDoObj = {
        id : toDos.length + 1,
        text : text
    }
    li.id = toDoObj.id;
    toDos.push(toDoObj);
    toDoNumber.innerHTML = `${toDos.length} items`;
}


function deleteToDos(event){
    const li = event.target.parentNode.parentNode;
    ul.removeChild(li);
    toDos.splice(parseInt(li.id -1), 1);
    toDoNumber.innerHTML = `${toDos.length} items`;
}

function hideText(event){
    const currentTarget = event.target;
    currentTarget.classList.add('hideText');
}
function init(){
    form.addEventListener('submit',handleSubmit);
}

init();