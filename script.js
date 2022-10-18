function menuClick() {
	if (document.querySelector('.nav').style.display == 'flex') {
		document.querySelector('.nav').style.display = 'none'
	} else {
		document.querySelector('.nav').style.display = 'flex'
	}
}

function resetarMenu() {
	if (window.innerWidth >= 650) {
		document.querySelector('.nav').style.display = 'flex'
	} else {
		document.querySelector('.nav').style.display = 'none'
	}
}
