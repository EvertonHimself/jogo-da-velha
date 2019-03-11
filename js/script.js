
var jogador = 'o';
var jogada = 0;
function jogoOK(id){
	var src = chkSrc(id);
	
// variável que checa se o check box está marcado ou não se estiver significa que o pc que vai jogar contra a gente	
	var pc = document.getElementById('pc').checked;
// soma uma jogada atras da outra para checar se deu empate
	jogada++;
// no jogo da velha existem nove possibilidades de vitória, se você joga e ultrapassa disso significa que "deu velha" ou seja empate
//troca a imagem dos campos do jogo
		if (src == "branco.jpg"){
		
		document.getElementById(id).src = "img/" + jogador + ".jpg";
				
// condição que representa a jogada				
         if (jogador == 'o'){
	
				jogador = 'x';
			   } else {
	
					jogador = 'o';
				}
				
		if (chkVitoria()){
			alert("fim do jogo");
			location.reload();
		}
// se a jogada der empate ele reinicia o jogo e manda uma mensagem na tela "deu velha"
		if (jogada >=9){
			alert("deu velha");
			location.reload();
		}
 }
		if (pc && jogador == 'x'){
			jogoOK(jogadaPc());
			
		}
// condição da jogada termina aqui
}
// função que determina que tamanho de arquivo de imagem o programa deve buscar 
function chkSrc(id){
var src = document.getElementById(id).src;
return src.substring(src.length - 10, src.length);

}
function jogadaPc(){
// isso torna o pc mais rapido na jogada ele está orientado nessa linha a sempre começar pelo meio se estiver em branco
	if (chkSrc('c5') == 'branco.jpg'){
		return 'c5';
	}
	return 'c' + Math.floor ((Math.random() * 9) + 1);
	
}
// a função Math.random é nativa do javascript ela gera um valor aleátório entre 0 e 0,99
// já a função Math.floor também é nativa, e ela tem o poder de aredondar o valor para baixo e transforma-lo em um inteiro

/* a função Math.random vezes 9 gera 0 no minimo e 8,99 no máximo, 
não queremos o zero então somamos tudo isso a um, 
porém ficaremos com o máximo em 9,99, por isso colocamos a função Math.floor*/


// função que determina a vitória
	function chkVitoria(){
	
	if ((chkSrc('c1') == chkSrc('c2')) && (chkSrc('c1') == chkSrc('c3')) && (chkSrc('c1') != 'branco.jpg')){
		return true;
	}
	if ((chkSrc('c4') == chkSrc('c5')) && (chkSrc('c4') == chkSrc('c6')) && (chkSrc('c4') != 'branco.jpg')){
		return true;
		
	}if ((chkSrc('c7') == chkSrc('c8')) && (chkSrc('c7') == chkSrc('c9')) && (chkSrc('c7') != 'branco.jpg')){
		return true;
		
	}if ((chkSrc('c1') == chkSrc('c4')) && (chkSrc('c1') == chkSrc('c4')) && (chkSrc('c1') != 'branco.jpg')){
		return true;
		
	}if ((chkSrc('c2') == chkSrc('c5')) && (chkSrc('c2') == chkSrc('c8')) && (chkSrc('c2') != 'branco.jpg')){
		return true;
		
	}if ((chkSrc('c3') == chkSrc('c6')) && (chkSrc('c3') == chkSrc('c9')) && (chkSrc('c3') != 'branco.jpg')){
		return true;
		
	}if ((chkSrc('c1') == chkSrc('c5')) && (chkSrc('c1') == chkSrc('c9')) && (chkSrc('c1') != 'branco.jpg')){
		return true;
		
	}if ((chkSrc('c3') == chkSrc('c5')) && (chkSrc('c3') == chkSrc('c7')) && (chkSrc('c3') != 'branco.jpg')){
		return true;
	}
	return false;
}
