
$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/imagem.json",
	success: function(data) {
		

		for(var i in data.imagens) {
			$('figure').append("<img src=" + data.imagens[i].caminho + ">");
			
		}
	}
});