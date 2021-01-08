const container = document.querySelector('.container');
const form = document.querySelector('.jsForm');
const input = document.querySelector('input');

function handleSubmit(event){
    event.preventDefault();
    let currentText = input.value
    console.log(currentText);
    input.value = "";
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();