const dox = {
	header: '',
	body: '',
	footer: '',
	date: '',
	app: {
		header: { info: prompt('Enter something head') },
		body: { info: prompt('Enter something body') },
		footer: { info: prompt('Enter something footer') },
		date: { info: new Date() },
		showMe: function () {
			document.write(dox.app.header.info + '<br>')
			document.write(dox.app.body.info + '<br>')
			document.write(dox.app.footer.info + '<br>')
			document.write(dox.app.date.info + '<br>')
		},
	},
	result: function () {
		dox.head = document.write()
		dox.body = document.write()
		dox.footer = document.write()
		dox.date = document.write()
	},
}

dox.app.showMe()
dox.result()
