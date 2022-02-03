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
        container.innerHTML+='<div class="carta" onclick="virar()"><div class="frente face"><img src="papagaio.png"></img></div><div class="verso face"></div></div>'

    }
}

adicionarCartas();

function virar(){

    
}