function buscarItens(){

let input=document.getElementById("buscar").value.toLowerCase()

let cards=document.querySelectorAll(".categoria-card")

cards.forEach(card=>{

let texto=card.innerText.toLowerCase()

if(texto.includes(input)){

card.style.display="block"

}else{

card.style.display="none"

}

})

}



function filtrarPreco(){

let filtro=document.getElementById("filtroPreco").value

let cards=document.querySelectorAll(".categoria-card")

cards.forEach(card=>{

let preco=card.querySelector(".preco")

if(!preco)return

let valor=parseInt(preco.innerText)

if(filtro==="todos"){

card.style.display="block"

}else if(valor<=parseInt(filtro)){

card.style.display="block"

}else{

card.style.display="none"

}

})

}



function iniciarContadores(){

let contadores=document.querySelectorAll(".contador")

contadores.forEach(contador=>{

let tempo=parseInt(contador.dataset.tempo)

setInterval(()=>{

tempo--

let h=Math.floor(tempo/3600)
let m=Math.floor((tempo%3600)/60)
let s=tempo%60

contador.innerHTML="Leilão termina em: "+h+"h "+m+"m "+s+"s"

},1000)

})

}

iniciarContadores()