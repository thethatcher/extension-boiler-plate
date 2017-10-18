/*************ADD CONTENT **************************/
// grab the search bar container and add an image onto the end of it
document.querySelector('#container').innerHTML += '<img src="https://www.w3schools.com/tags/smiley.gif" alt="Smiley face" height="42" width="42">';

/*************SCRAPE DATA**************************/
// create an array that we will use to store all the data we want about the videos
var videos = [];
// When the page loads scrape the suggested videos and store them into an list of objects
window.onload = function() {
	// Target and Grab the video html
	var listOfVideos = document.getElementsByTagName('ytd-grid-video-renderer');
	// Loop through the list of videos
	for (var i = 0; i < listOfVideos.length; i++) {
		// create a video object
		var video = {};
		// grab the title of the video html and store it into our new video object with a key of "title"
		video.title = listOfVideos[i].querySelector("#video-title").innerHTML;
		// grab the href of the video html and store it into our new video object with a key of "url"
		video.url = listOfVideos[i].querySelector("#video-title").href;
		// push our new video object out to our video array
		videos.push(video);
	}
	// log our video array out to the console.
	console.log(videos);
}