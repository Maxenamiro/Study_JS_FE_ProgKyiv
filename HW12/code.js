let [...button] = document.querySelectorAll('.btn')

document.body.addEventListener('keypress', (e) => {
	button.forEach((element) => {
		if (e.code == element.name) {
			element.style.backgroundColor = 'blue'
		} else if (
			(element.style.backgroundColor = 'blue' && e.code != element.name)
		) {
			element.style.backgroundColor = 'black'
		}
	})
})
