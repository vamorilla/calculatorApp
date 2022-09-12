const lastInput = document.getElementById('last-input');
const currentInput = document.getElementById('current-input');

const numBtns = document.querySelectorAll('.btn-num');
const opBtns = document.querySelectorAll('.operador');

const display = new Display(lastInput, currentInput);

numBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        display.addNum(btn.innerHTML);
    });
});

opBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        display.compute(btn.value);
    })
})