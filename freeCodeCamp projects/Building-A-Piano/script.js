
function powerOnOff() {
	var x = document.getElementById('button-left');

	if (!x.style.background || x.style.background == 'rgb(104, 104, 104)') {
		x.style.background = 'radial-gradient(#87de87, #c6f4c6)';
		x.style.boxShadow = '0 0 8px 1px white';
	} else {
		x.style.background = 'rgb(104, 104, 104)';
		x.style.boxShadow = 'none';
	}

}


function playAudio() {
	let song = new Audio('Explosion.mp3');
  	song.play()
}


// don't write a separate function for each mp3. 
// instead, pass in the id name as a parameter and 
// use string literals in the .mp3 name to select.

// var x = document.getElementbyId('myAudio');

// function playAudio() {
// 	x.play()
// }