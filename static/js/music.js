var music_list = [];
var audio = undefined;
var identifier = 0;
var songPlayingIdentifier = undefined;

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
	$('.fa-play-circle-o').click(function() {
		if (audio != undefined) {
			if (audio.paused)
				audio.play();
			else
				audio.pause();
		}
	});
	$('.fa-step-backward').click(function() {
		if (audio != undefined) 
			getPreviousSong();
	});
	$('.fa-step-forward').click(function() {
		if (audio != undefined) 
			getNextSong();
	});
});

function addItemToPage(item) {
	var html = '<div class="list_item" id="' + identifier + '">' + item + '</div>';
	$('.directory_list').append(html);
	$('#' + identifier).click(function() {
		if (audio != undefined)
			audio.pause();
		audio = new Audio('music/' + item);	
		audio.play();
		songPlayingIdentifier = this.id;
		console.log("playing: " + item);
	});
	identifier++;
}

function getPreviousSong() {
	console.log('prev');
	audio.pause();
	if ((songPlayingIdentifier - 1) >= 0)
		audio = new Audio('music/' + music_list[--songPlayingIdentifier]);
	audio.play();
}

function getNextSong() {
	console.log('next');
	audio.pause();
	console.log(music_list[++songPlayingIdentifier]);
	if ((songPlayingIdentifier + 1) < music_list.length)
		audio = new Audio('music/' + music_list[++songPlayingIdentifier]);
	audio.play();
}

