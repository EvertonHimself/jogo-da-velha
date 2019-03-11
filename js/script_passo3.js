
var jogador = 'o';
function jogoOK(id){
	var src = chkSrc(id);
		if (src == "branco.jpg"){
		
		document.getElementById(id).src = "img/" + jogador + ".jpg";
				
         if (jogador == 'o'){
	
				jogador = 'x';
			   } else {
	
					jogador = 'o';
				}
				
		if (chkVitoria()){
			alert("fim do jogo");
			location.reload();
		}

		
        }

}
function chkSrc(id){
var src = document.getElementById(id).src;
return src.substring(src.length - 10, src.length);

}

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

