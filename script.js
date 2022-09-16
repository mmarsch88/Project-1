//Pull track then pull track id to put in the url of the variable lyrics 
// Grab user input to find the track and the artist needed
let trackInput = document.getElementById("type");
var iframe = document.querySelector("#iframe")
var inputForm = document.querySelector("#input-form");
var userInput = document.querySelector(".input");
//var trackId ="";
function getTrack(event){
   event.preventDefault();
   let searchResults = trackInput.value;
   var trackUrl = "https://api.musixmatch.com/ws/1.1/track.lyric.get?" + searchResults;
   fetch(trackUrl).then(response => {
      response.json().then(data => {
         console.log(data)
      })
   })
}
trackInput.addEventListener("click",getTrack);






function searchTracks(event) {
   event.preventDefault();
   let searchResults = trackInput.value;
   console.log(searchResults)
   fetch("https://api.soundcloud.com/tracks/?client_id=mmarsch88" + searchResults).then(function(response) {
      console.log(response)
if (response.status != 200) {
console.log("Looks like there was a problem. Status Code" + response.status);

}
response.json().then(function(data) {
let track = data;
console.log(track);
})
   })
}

function getLyrics (event) {
   console.log(event)
}



iframe.contentWindow.addEventListener("click",getLyrics)

