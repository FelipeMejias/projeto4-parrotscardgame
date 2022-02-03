let quantidadeCartas =0
function perguntarQuantidade(){
    let quantidade =0
    while(quantidade<1 || quantidade > 15 || quantidade%2 !==0){
    quantidade = parseInt(prompt('Com quantas cartas, de 2 a 14, você quer jogar(somente numeros pares)'))
    }
    quantidadeCartas=quantidade

}
perguntarQuantidade();

const container=document.querySelector(".container")

function adicionarCartas(){

    for(let contador=0;contador<quantidadeCartas;contador++){
        container.innerHTML+='<div class="card" onClick="virar(this)"><div class="face front-face"><img src="papagaio.png"></div><div class="face back-face">"bekjcwkec"</div></div>'

    }
}

adicionarCartas();

let contador=0
function virar(cartaClicada){
    if(contador<2){
    cartaClicada.classList.add('virada');
    contador++;
    }
    else{
        contador=0;
        desvirar();
    }
}

function desvirar(){
    const cartaViradas=document.querySelector('.virada');
    cartaViradas.classList.remove('virada');
    const outraCarta=document.querySelector('.virada');
    outraCarta.classList.remove('virada');
}