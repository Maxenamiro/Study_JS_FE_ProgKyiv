window.addEventListener('DOMContentLoaded', () => {
	const div = document.getElementsByTagName('div')[0]
	const mouse = (e) => {
		console.log(`X=${e.clientX} / Y=${e.clientY}`)
	}
	div.addEventListener('mouseover', mouse)
})
