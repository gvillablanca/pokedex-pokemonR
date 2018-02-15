const form = document.getElementById('search-form');
	
const param = $('.search-keyword').val(); 
const pokeName = JSON.parse(param);
//const param = document.getElementById('search-keyword').val;
//asignamos la url a la variable getPokemon
$(document).ready(() => {
  getPokemon('https://pokeapi.co/api/v2/pokemon');
  pokeSubmit('http://pokeapi.co/api/v1/pokemon/' + pokeName);
});	

/*
* hacemos el llamado ajax para obtener los datos de los pokemones
* definimos el objeto de configuración 
* y asignamos los métodos para manejar errores
*/
const getPokemon = url => {
	$.ajax({
			url,
			type: 'GET',
		dataType: 'json',
		data: {'limit': '20'},
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

/*
* En showPokemon creamos el código para que los pokemones se muestren en la página
* 
 */
const showPokemon = arr => {
	let showStyle = '';
	for(let i = 0; i < Math.random(arr.length / 20); i++){
		showStyle += "<div class='col-sm-8 col-md-8'>";
		for (let j = 0; j < 20; j++){
			showStyle += '<div class="thumbnail pokemonBox">';
			showStyle += `<img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/${arr[20*i + j].name}.png" class="responsive-img">`;
			showStyle += `<h4>${arr[20*i + j].name}`;	
			showStyle += '</h4></div>'
		}
		showStyle += "</div>"
	}
	$("#contPokemon").append(showStyle);
}
/*---------------------------------------------- */


const pokeSubmit= url => {
	$.ajax({
		url,
		data: {'number': 'data.national_id',
		'nombre': 'data.name'
	},
	}).done(responseAdd => {
		showDataPokemon(responseAdd.results);
	})
	.fail(() => {
		alert('La busqueda no dio resultado');
	})
	.always(() => {
		console.log('tu pokemon es' + pokeName);
	});	
};

form.addEventListener('submit', function(e) {
	e.preventDefault();
	
})
const showDataPokemon = data => {
	let showMyPokemon = '';
	showMyPokemon += "<div class='col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3'>";
	showMyPokemon += '<div class= "thumbnail myPokemonBox">';
	showMyPokemon += `<img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokeName}.png" class="responsive-img">`;
	showMyPokemon += `<h3>${param}`;
	showMyPokemon += '</h3></div>'
	showMyPokemon += "</div>"

	$("#myPokemon").append(showMyPokemon);
}
