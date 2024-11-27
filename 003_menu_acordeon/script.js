let conts = document.querySelector('.container')
let bts = document.querySelector('.vai_volta')


let fechada = true
bts.addEventListener('click', ()=>{
    if(fechada){
        conts.style.height='fit-content'
        fechada=false
    }else{
        conts.style.height='0'
        fechada=true
    }
})