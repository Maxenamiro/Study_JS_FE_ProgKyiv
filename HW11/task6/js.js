let Acolor = document.getElementById('colorWell')
let Amove = document.getElementById('go')

Amove.addEventListener('click', () => {
	document.body.style.background = Acolor.value
})
