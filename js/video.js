var video;
//Page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("video");
	video.autoplay = false;
    video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});
// Play Button: Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
 });

//Volume Slider: Change the volume based on the slider and updating the volume of the video.
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("The current value is", video.volume);
});


//Pause Button: Pause the video
document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});
//Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is", video.playbackRate);

});
/*Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. If you slow down three times and then speed up three times you should be within 5 digits of 100% again*/
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log("Speed is", video.playbackRate);
});
/*Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.*/
document.querySelector("#skip").addEventListener("click", function (){
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Skip ahead");
	console.log("Video current time is", video.currentTime);
})
//Mute: Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
});
//Styled: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");

});
//Original: Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");

});

