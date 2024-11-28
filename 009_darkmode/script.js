let body=document.querySelector('body');
let bt=document.querySelector('button')
let h1=document.querySelector('h1')


let darkMode = false

function muda(){
    if(darkMode){
        body.style.setProperty("--cor1", '#0000c7');
        body.style.setProperty("--cor2", '#ffd621');
        h1.innerText='Dark Mode desativado';
        darkMode=false;
    }else{
        body.style.setProperty("--cor1", '#000025');
        body.style.setProperty("--cor2", '#eeeeee');
        h1.innerText='Dark Mode ativado';
        darkMode=true;
    }
}

bt.addEventListener('click', muda)

body.addEventListener('keypress', (key)=>{
    if(key.code==='Enter'){
        muda()
    }
})