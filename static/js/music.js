var music_list = [];

$(document).ready(function() {
	console.log("loaded");
	$.get('available_music', function(music) {
		music.sort();
		music_list = music;	
		if (music_list.length == 0) {
			console.log("in");
			addItemToPage("No Songs Available.");	
		} else {
			for (var song in music) 
				addItemToPage(music[song]);
		}
	});
});

function addItemToPage(item) {
	var html = '<div class="list_item">' + item + '</div>';
	$('.directory_list').append(html);
}
