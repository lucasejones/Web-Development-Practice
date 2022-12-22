window.addEventListener('resize', function() {
	var w = window.innerWidth;
	if (w < 600) {
		document.getElementById('user-email').placeholder='Enter email';
	} else {
		document.getElementById('user-email').placeholder='Enter your email';
	}
});
