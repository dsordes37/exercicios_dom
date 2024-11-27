let likes = document.querySelectorAll('.like_bt');
let clicados = [];

likes.forEach(()=>{
    clicados.push(false);
});

likes.forEach((like, index)=>{
    like.addEventListener('click', ()=>{
        if(clicados[index]){
            like.style.color='black'
            clicados[index]=false
        }else{
            like.style.color='red'
            clicados[index]=true
        }
    })
});