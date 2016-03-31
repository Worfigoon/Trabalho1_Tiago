$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		

		for(var i in data.estados) {
			$('select').append('<option>' + data.estados[i].estado + '</option>');
			
		}
	}
});

