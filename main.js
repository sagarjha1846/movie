$(document).ready(function(){
	$('body').on('submit','#search',function(e){
		let searhmov = $('#searhmov').val();
		getMovies(searhmov);
		e.preventDefault();
	});
});

function getMovies(searhmov){
	$.ajax({
		method:'GET' ,
		url:'http://www.omdbapi.com/?apikey=e0620bd4&s='+searhmov
	}).done(function(data){
		let movies = data.Search;
		let output = '';
		$.each(movies, function(index, movie){
			output += `
			<li>
				<a href="#">
					<img src="${movie.Poster}">
					<h2>${movie.Title}</h2>
					<p>Release year : ${movie.Year}</p>
				</a>
			</li>
			`;
		});
		 $('#movies').html(output);
	});
}

