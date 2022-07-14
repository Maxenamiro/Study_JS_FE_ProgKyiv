let divSlider = document.createElement('myDiv')
document.body.append(div)

let img = document.createElement('img')
div.append(img)

let imgIndex = 0
let images = [
	'https://i.kym-cdn.com/entries/icons/mobile/000/037/043/monkey_sony_walkman.jpg',
	'https://i.imgflip.com/5a4pil.jpg',
	'http://pm1.narvii.com/7760/af1f89b0123ef55504057eeeda795ac358c41abar1-325-273v2_00.jpg',
]

let slider = () => {
	img.setAttribute('src', images[imgIndex])
	imgIndex++
	if (imgIndex === images.length) imgIndex = 0
}

let showImages = () => {
	setInterval(slider, 3000)
}

showImages()
