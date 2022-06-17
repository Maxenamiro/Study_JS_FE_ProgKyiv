const dox = {
	header: '',
	body: '',
	footer: '',
	date: '',
	app: {
		header: { info: '' },
		body: { info: '' },
		footer: { info: '' },
		date: { info: '' },
		print: function () {
			document.getElementById('head').innerHTML = `${doc.app.head.info}`
			document.getElementById('body').innerHTML = `${doc.app.body.info}`
			document.getElementById('myDate').innerHTML = `${doc.app.myDate.info}`
			document.getElementById('footer').innerHTML = `${doc.app.footer.info}`
		},
	},
}
function fill() {
	dox.header = prompt('Введіть текст header')
	dox.body = prompt('Введіть текст body')
	dox.footer = prompt('Введіть текст footer')
	dox.date = prompt('Введіть текст date')
	document.write('<br>')
	dox.app.header = prompt('Введіть текст header')
	dox.app.body = prompt('Введіть текст body')
	dox.app.footer = prompt('Введіть текст footer')
	dox.app.date = prompt('Введіть текст date')
}

fill()
