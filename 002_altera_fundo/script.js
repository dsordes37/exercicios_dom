let bt_azul = document.getElementById('azul');
let bt_vermelho = document.getElementById('vermelho');
let bt_amarelo = document.getElementById('amarelo');

let body = document.querySelector('body')


bt_azul.addEventListener('click', ()=>{
    body.style.backgroundColor='#0059ff'
})


bt_amarelo.addEventListener('click', ()=>{
    body.style.backgroundColor='#ffae00'
})


bt_vermelho.addEventListener('click', ()=>{
    body.style.backgroundColor='#bb0019'
})