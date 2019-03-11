
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
}