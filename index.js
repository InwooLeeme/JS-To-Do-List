const container = document.querySelector('.container');
const form = document.querySelector('.jsForm');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

function handleSubmit(event){
    event.preventDefault();
    let currentText = input.value
    console.log(currentText);
    input.value = "";
    const span = document.createElement('span');
    span.classList.add('delBtn');
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    span.innerHTML = `<i class="fas fa-check-square"></i>`;
    textSpan.innerHTML = currentText;
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(textSpan);
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();