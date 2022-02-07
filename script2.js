
const michael={nome:'michael', imagem:'<img src="michael.jpg">'};
const dwight={nome:'dwight', imagem:'<img src="dwight.jpg">'};
const pam={nome:'pam', imagem:'<img src="pam.jpg">'};
const jim={nome:'jim', imagem:'<img src="jim.jpg">'};
const holly={nome:'holly', imagem:'<img src="holly.jpg">'};
const stanley={nome:'stanley', imagem:'<img src="stanley.jpg">'};
const kevin={nome:'kevin', imagem:'<img src="kevin.jpg">'};


const listaTodos=[michael,michael,dwight,dwight,pam,pam,jim,jim,holly,holly,stanley,stanley,kevin,kevin];

const listaJogo=[];

function formarListaJogo(){
    for(let i=0;i<quantidadeCartas;i++){
        const item=listaTodos[i];
        listaJogo.push(item);
    }
    listaJogo.sort(comparador);
}

function comparador() { 
	return Math.random() - 0.5; 
}

let tempoFinal=null
function aumentarRelogio(){
    if(paresAchados===quantidadeCartas/2){
        clearInterval(intervalo);
        ;
    }else{
    let relogio=document.querySelector('.relogio');
    relogio.innerHTML=parseInt(relogio.innerHTML) + 1;
    tempoFinal=relogio.innerHTML;
}
}
let intervalo=null;
intervalo=setInterval(aumentarRelogio,1000);


perguntarQuantidade();
formarListaJogo();
adicionarCartas();


