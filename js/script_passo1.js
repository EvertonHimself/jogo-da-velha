
var jogador = 'o';
function jogoOK(id){
	var src = okSrc(id);
		if (src == "branco.jpg"){
		
		document.getElementById(id).src = "img/" + jogador + ".jpg";
		
				
        }

}
function okSrc(id){
var src = document.getElementById(id).src;
return src.substring(src.length - 10, src.length);

}
