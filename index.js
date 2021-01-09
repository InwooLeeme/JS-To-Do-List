const form = document.querySelector('.jsForm');
const input = document.querySelector('input');
const ul = document.querySelector('.displayItems');
const itemNumber = document.querySelector('.displayNumber');
let toDos = [];

function handleSubmit(event){
    event.preventDefault();
    const currentText = input.value;
    input.value = "";
    createItems(currentText);
}

function createItems(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.addEventListener('click', cleanToDos);
    const textSpan = document.createElement('span');
    textSpan.addEventListener('click', () => {
        textSpan.classList.add('hideText');
    });
    span.innerHTML = `<i class="fas fa-check"></i>`;
    textSpan.innerText = text;
    const toDoObj = {
        id : toDos.length + 1,
        text : text
    }
    li.id = toDoObj.id;
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(textSpan);
    toDos.push(toDoObj);
    itemNumber.innerHTML = `${toDos.length} items`;
}

function cleanToDos(event){
    const li = event.target.parentNode.parentNode;
    ul.removeChild(li);
    const clearToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id);
    });
    toDos = clearToDos;
    itemNumber.innerHTML = `${toDos.length} items`;
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();