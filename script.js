let quantidadeCartas =0
function perguntarQuantidade(){
    let quantidade =0
    while(quantidade<1 || quantidade > 15 || quantidade%2 !==0){
    quantidade = parseInt(prompt('Com quantas cartas, de 2 a 14, você quer jogar(somente numeros pares)'))
    }
    quantidadeCartas=quantidade

}

const container=document.querySelector(".container")

function adicionarCartas(){

    for(let contador=0;contador<quantidadeCartas;contador++){
        container.innerHTML+='<div class="card" data-identifier="card" onClick="virar(this,'+listaJogo[contador].nome+')"><div class="face front-face" data-identifier="front-face"><img src="papagaio.png"></div><div class="face back-face" identifier="back-face">'+listaJogo[contador].imagem+'</div></div>'

    }
}

let contador=0
let nomeCarta1=''
let nomeCarta2=''
let carta1=null;
let carta2=null;
let paresAchados=0;
let contagemJogadas=0

function virar(cartaClicada,nomeCarta){
    if(contador===0){

        if(cartaClicada.classList.contains('virada')){
            alert('escolha outra');
        }
        else{    
    cartaClicada.classList.add('virada');
    nomeCarta1=nomeCarta;
    carta1=cartaClicada;
    contador++}}
    
    else if(contador===1){

        if(cartaClicada.classList.contains('virada')){
            alert('escolha outra');
        }
        else{cartaClicada.classList.add('virada');
        nomeCarta2=nomeCarta;
        carta2=cartaClicada;
        contador++;
        conferirPar(nomeCarta1,nomeCarta2);
        }
    }   
}
function zerarContador(){contador=0;}

function desvirar(){
    carta1.classList.remove('virada');
    carta2.classList.remove('virada');
}

function conferirPar(primeiraCarta,segundaCarta){
    contagemJogadas++;
    if(primeiraCarta==segundaCarta){
        zerarContador();
        nomeCarta1='';
        nomeCarta2='';
        paresAchados++;
    }
    else{
        setTimeout(desvirar,1000);
        setTimeout(zerarContador,1000);
    }
    setTimeout( conferirFimDoJogo,500);
}

function conferirFimDoJogo(){
    if(paresAchados===quantidadeCartas/2){
        alert("Você ganhou em "+contagemJogadas+" jogadas, com um tempo de "+tempoFinal+" segundos!")
        recomecarJogo();
    }
}




