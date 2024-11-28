let body=document.querySelector('body')
let cont=document.querySelector('.container')
let slider=document.querySelector('.slider')

let ligado=false

cont.addEventListener('click', ()=>{
    if(ligado){
        slider.style.left='2%'

        ligado=false
    }else{
        slider.style.left='44.5%'
        
        ligado=true
    }
})