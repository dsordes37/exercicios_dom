let bt = document.querySelector('#abre_fecha');
let menu = document.querySelector('#container');

let aberto=true

bt.addEventListener('click', ()=>{
    if(aberto){
        menu.style.left='-400px';
        aberto=false
        bt.innerHTML='&blacktriangleright;'
    }else{
        menu.style.left='0px';
        aberto=true; 
        bt.innerHTML='&blacktriangleleft;'
    }
})