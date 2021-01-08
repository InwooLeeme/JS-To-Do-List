const container = document.querySelector('.container');
const form = document.querySelector('.jsForm');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let toDos = [];

function handleSubmit(event){
    event.preventDefault();
    let currentText = input.value
    input.value = "";
    createText(currentText);
}

function createText(text){
    const delBtn = document.createElement('button');
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    delBtn.innerHTML = `<i class="fas fa-check-square"></i>`;
    delBtn.id = toDos.length + 1;
    textSpan.innerHTML = text;
    textSpan.classList.add(toDos.length + 1);
    textSpan.addEventListener('click',hideText);
    ul.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(textSpan);
    toDos.push(text);
}

function hideText(event){
    const currentTarget = event.target;
    currentTarget.classList.add('hideText');
}


function init(){
    form.addEventListener('submit',handleSubmit);
}


init();