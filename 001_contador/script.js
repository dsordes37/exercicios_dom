let viewer = document.getElementById('numero');
let decrementa = document.getElementById('decrementa');
let encrementa = document.getElementById('encrementa');
let zera = document.querySelector('#zera')


decrementa.addEventListener('click', ()=>{
    let valor=parseInt(viewer.innerText);
    valor--
    viewer.innerText=valor
})


encrementa.addEventListener('click', ()=>{
    let valor=parseInt(viewer.innerText);
    valor++
    viewer.innerText=valor
})


zera.addEventListener('click', ()=>{
    viewer.innerText=0
})