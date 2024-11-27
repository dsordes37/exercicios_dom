let popup = document.getElementById('popup');
let bt_abre = document.getElementById('abre');
let bt_fecha = document.getElementById('fecha');

popup.style.display='none';

bt_abre.addEventListener('click', ()=>{
    popup.style.display='flex';
})

bt_fecha.addEventListener('click', ()=>{
    popup.style.display='none';
})