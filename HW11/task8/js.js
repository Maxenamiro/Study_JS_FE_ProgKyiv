let area = document.getElementById('textarea')
let text = document.getElementById('text')
area.addEventListener('input', () => {
	text.textContent = `${area.value}`
})
