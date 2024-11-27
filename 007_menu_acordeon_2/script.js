let conts = document.querySelectorAll('.container')
let bts = document.querySelectorAll('.vai_volta')

let fechada=[]
bts.forEach((bt)=>{
    fechada.push(true)
    bt.innerText='🢂'
})


bts.forEach((bt, index)=>{
    console.log(fechada[index])
    bt.addEventListener('click', ()=>{
        if(fechada[index]){
            conts[index].style.height='fit-content'
            bt.innerText='🢃'
            fechada[index]=false
        }else{
            conts[index].style.height='0'
            bt.innerText='🢂'
            fechada[index]=true
        }
    })

})