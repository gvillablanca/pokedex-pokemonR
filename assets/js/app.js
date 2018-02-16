$(document).ready(() => {
	getPokemon('https://pokeapi.co/api/v2/pokemon');
  $('#searchPokemon').on('keypress', function(enter) {
    let getPokemon = $('#searchPokemon').val();
    if(enter.which === 13) {
      $('#searchPokemon').val();
      $.ajax({
        url: `http://pokeapi.co/api/v2/pokemon/${getPokemon}`,
        type: 'GET',
        datatype: 'json'
      })
      .done(function(response) {
        showPokeInfo(response);
      })
      .fail(function(error) {
        console.log('Hubo un error en la API');
      });
    }
  });
})

function showPokeInfo(info) {
    $('#showData').append(`<div class="col-md-2 col-sm-2 boxResults"><img src="https://pokeapi.co/media/img/${info.id}.png" class="pokemonVisual"><h5>Nombre: ${info.name}</h5><p>Id: ${info.id}</p><p>Orden: ${info.order}</p></div>`);    
};

const getPokemon = url => {
	$.ajax({
			url,
			type: 'GET',
		dataType: 'json',
	}) 
	// el método done se basa en la respuesta
	.done(response => {
		showPokemon(response.results);
	})
	.fail(() => {
		alert('error');
	})
	.always(() => {
		console.log('todo listo');
	});	
};

const showPokemon = ()=> {
	for(let i = 1; i<= 108 ; i++){
		$('#contPokemon').append(`<img id="${i}" src="http://pokeapi.co/media/img/${i}.png">`);
	}
}



