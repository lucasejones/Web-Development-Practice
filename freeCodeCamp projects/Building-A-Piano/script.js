
var power_on = false;

function powerOnOff() {
	var power_button = document.getElementById('button-left');
	var lcd = document.getElementById('lcd');
	var lcd_text = document.getElementById('lcd-text');

	if (power_on == false) {
		power_on = true;

		// power button color and glow
		power_button.style.background = 'radial-gradient(#87de87, #c6f4c6)';
		power_button.style.boxShadow = '0 0 8px 1px white';

		// lcd color and glow
		lcd.style.background = 'rgb(36, 40, 47)';
		lcd.style.boxShadow = '0 0 20px 4px white';

		// lcd text visibility
		lcd_text.style.display = 'block'

	} else if (power_on == true) {
		power_on = false

		// power button color and glow
		power_button.style.background = 'rgb(104, 104, 104)';
		power_button.style.boxShadow = 'none';

		// lcd color and glow
		lcd.style.background = 'rgb(45, 45, 45)'
		lcd.style.boxShadow = 'none'

		// lcd text visibility
		lcd_text.style.display = 'none'
	}

}


// older construction
// function powerOnOff() {
// 	var x = document.getElementById('button-left');
// 	var lcd = document.getElementById('lcd');
// 	var lcd_text = document.getElementById('lcd-text');
// 	var power_on = false;


// 	// power button color and glow
// 	if (!x.style.background || x.style.background == 'rgb(104, 104, 104)') {
// 		x.style.background = 'radial-gradient(#87de87, #c6f4c6)';
// 		x.style.boxShadow = '0 0 8px 1px white';
// 		power_on = true;
// 	} else {
// 		x.style.background = 'rgb(104, 104, 104)';
// 		x.style.boxShadow = 'none';
// 		power_on = false;
// 	}

// 	// lcd color and glow
// 	if (!lcd.style.background || lcd.style.background == 'rgb(45, 45, 45)') {
// 		console.log('if hey')
// 		console.log(lcd.style.background)
// 		lcd.style.background = 'rgb(36, 40, 47)';
// 		lcd.style.boxShadow = '0 0 20px 4px white';
// 	} else {
// 		console.log('else hey')
// 		console.log(lcd.style.background)
// 		lcd.style.background = 'rgb(45, 45, 45)'
// 		lcd.style.boxShadow = 'none'
// 	}

// 	//lcd text visibility
// 	if (power_on == false) {
// 		console.log('off')
// 		lcd_text.style.display = 'none'
// 	} else {
// 		console.log('on')
// 		lcd_text.style.display = 'block'
// 	}

// }




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