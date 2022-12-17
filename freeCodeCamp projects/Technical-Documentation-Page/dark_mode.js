var lightMode = true

function Toggle() {
	modeToggle = document.getElementById('toggle-circle');
	bodyElement = document.querySelector('body');
	hOne = document.querySelectorAll('h1');
	subContent = document.getElementsByClassName('sub-content');
	navLinks = document.getElementsByClassName('nav-links');
	mainPList = document.querySelectorAll('p');
	inlineCode = document.getElementsByClassName('language-none');
	oneLineCode = document.getElementsByClassName('tall');
	codeBlocks = document.getElementsByClassName('language-javascript');
	codeBlockDiv = document.getElementsByClassName('prism-div');
	codeLines = document.getElementsByClassName('token');
	highlights = document.getElementsByClassName('highlight');


	if (lightMode == true) {
		lightMode = false;
		modeToggle.style.left = '20px';
		bodyElement.style.backgroundColor = 'rgb(33, 33, 33)';
		// hOne.style.color = 'rgb(216, 216, 216)';
	} else if (lightMode == false) {
		lightMode = true;
		modeToggle.style.left = '0px';
		bodyElement.style.backgroundColor = 'rgb(250, 250, 250)';
		// hOne.style.color = 'inherit';
	}



	// h1 text
	for (var i = 0; i < hOne.length; i ++) {
		if (lightMode == true) {
			hOne[i].style.color = 'inherit';
		} else if (lightMode == false) {
			hOne[i].style.color = 'rgb(216, 216, 216)';
		}
	}


	// main content text
	for (var i = 0; i < subContent.length; i++) {
		// console.log(subContent[i])
		if (lightMode == true) {
			subContent[i].style.color = 'rgb(68, 68, 68)';
		} else if (lightMode == false) {
			subContent[i].style.color = 'rgb(170, 170, 170)';
		}
	}


	// navbar links
	for (var i = 0; i < navLinks.length; i++) {
		if (lightMode == true) {
			navLinks[i].style.color = 'rgb(68, 68, 68)';
		} else if (lightMode == false) {
			navLinks[i].style.color = 'rgb(170, 170, 170)';
		}
	}


	//main content links 
	for (var i = 0; i < mainPList.length; i++) {
		linkList = mainPList[i].querySelectorAll('a');
		console.log(linkList)
		for (var j = 0; j < linkList.length; j++) {
			if (lightMode == true) {
				linkList[j].style.color = 'rgb(68, 68, 68)';
			} else if (lightMode == false) {
				// linkList[j].style.color = 'rgb(216, 216, 216)';
				linkList[j].style.color = 'rgb(170, 170, 170)';
			}
		}
	}

	// in-line code
	for (var i = 0; i < inlineCode.length; i++) {
		if (lightMode == true) {
			inlineCode[i].style.color = 'rgb(35, 35, 35)'
			inlineCode[i].style.background = 'rgb(224, 224, 224)';
		} else if (lightMode == false) {
			inlineCode[i].style.color = 'rgb(220, 220, 220)'
			inlineCode[i].style.background = 'rgb(75, 75, 75)';
			inlineCode[i].style.textShadow = 'none';
		}
	}

	// in-line code
	for (var i = 0; i < oneLineCode.length; i++) {
		if (lightMode == true) {
			oneLineCode[i].style.color = 'rgb(35, 35, 35)'
			oneLineCode[i].style.background = 'rgb(245, 242, 240)';
		} else if (lightMode == false) {
			oneLineCode[i].style.color = 'rgb(220, 220, 220)'
			oneLineCode[i].style.background = 'rgb(75, 75, 75)';
			oneLineCode[i].style.textShadow = 'none';
		}
	}

	// code blocks
	for (var i = 0; i < codeBlocks.length; i++) {
		if (lightMode == true) {
			codeBlocks[i].style.color = 'rgb(35, 35, 35)'
			codeBlocks[i].style.background = 'rgb(245, 242, 240)';
		} else if (lightMode == false) {
			codeBlocks[i].style.color = 'rgb(220, 220, 220)';
			codeBlocks[i].style.background = 'rgb(75, 75, 75)';
			codeBlocks[i].style.textShadow = 'none';
		}
	}

	// code block border
	for (var i = 0; i < codeBlockDiv.length; i++) {
		if (lightMode == true) {
			codeBlockDiv[i].style.border = '3px solid rgb(241, 241, 241)';
		} else if (lightMode == false) {
			codeBlockDiv[i].style.border = '3px solid rgb(63, 63, 63)';
		}
	}

	// tokens
	for (var i = 0; i < codeLines.length; i++) {
		if (lightMode == true) {
			codeLines[i].style.color = 'initial';
			codeLines[i].style.background = 'rgb(245, 242, 240)'
		} else if (lightMode == false) {
			codeLines[i].style.color = 'rgb(208, 208, 208)';
			codeLines[i].style.background = 'rgb(75, 75, 75)'
		}
	}

	// error highlights
	for (var i = 0; i < highlights.length; i++) {
		if (lightMode == true) {
			highlights[i].style.background = 'rgb(255, 231, 231)'
		} else if (lightMode == false) {
			highlights[i].style.background = 'rgb(120, 100, 100)'
		}
	}


}

