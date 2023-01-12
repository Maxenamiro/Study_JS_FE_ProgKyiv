let pizza = {
	price: {
		priceKorg: 60,
		priceSous: 0,
		priceToping: 0,
	},
	korg: {
		min: 20,
		sml: 40,
		max: 60,
	},
	sous: {
		ketchup: 13,
		bbq: 24,
		pikota: 15,
	},
	toping: {
		chiz: 40,
		feta: 76,
		masar: 81,
		meat: 55,
		tomat: 23,
		mushroom: 69,
	},
}
const coolPrice = document.querySelector('.price > p')
const coolSauces = document.querySelector('.sauces > p')
const coolTopings = document.querySelector('.topings > p')
const gridName = document.querySelector('[name="name"]')
const gridPhone = document.querySelector('[name="phone"]')
const gridEmail = document.querySelector('[name="email"]')

function red(e) {
	const [...radio] = document.getElementsByClassName('radioIn')
	radio.forEach(function (item) {
		item.onchange = function () {
			const ceik = radio.filter(function (number) {
				return number.checked
			})
			switch (ceik[0].id) {
				case 'small':
					pizza.price.priceKorg = pizza.korg.min
					break
				case 'mid':
					pizza.price.priceKorg = pizza.korg.sml
					break
				case 'big':
					pizza.price.priceKorg = pizza.korg.max
					break
			}
			cool()
			// console.log(ceik[0].id);
		}
	})
}

function additive(e) {
	switch (e.currentTarget.id) {
		case 'sauceClassic':
			pizza.price.priceSous += pizza.sous.ketchup
			break
		case 'sauceBBQ':
			pizza.price.priceSous += pizza.sous.bbq
			break
		case 'sauceRikotta':
			pizza.price.priceSous += pizza.sous.pikota
			break

		case 'moc1':
			pizza.price.priceToping += pizza.toping.chiz
			break
		case 'moc2':
			pizza.price.priceToping += pizza.toping.feta
			break
		case 'moc3':
			pizza.price.priceToping += pizza.toping.masar
			break
		case 'telya':
			pizza.price.priceToping += pizza.toping.meat
			break
		case 'vetch1':
			pizza.price.priceToping += pizza.toping.tomat
			break
		case 'vetch2':
			pizza.price.priceToping += pizza.toping.mushroom
			break
	}
	cool()
	// console.log(e.currentTarget.id);
}

function cool() {
	coolPrice.innerHTML =
		'Цiна: ' +
		(pizza.price.priceKorg + pizza.price.priceSous + pizza.price.priceToping)
	coolSauces.innerHTML = 'Соуси: ' + pizza.price.priceSous
	coolTopings.innerHTML = 'Топiнги: ' + pizza.price.priceToping
}

function cliner() {
	gridName.innerHTML = "Iм'я"
	gridPhone.innerHTML = '+380505050500'
	gridEmail.innerHTML = 'email@email.com'
}

function okForm(e) {
	let isValid = true
	const name = user_name,
		phone = user_phone,
		email = user_email
	if (
		name[0].value.length === 0 ||
		phone[0].value.length === 0 ||
		email[0].value.length === 0
	) {
		isValid = false
	}
	if (name[0].value.search(/[А-я]/) == -1) {
		isValid = false
	}
	if (phone[0].value.search(/\+{1}[0-9]{12}/) == -1) {
		isValid = false
	}
	if (email[0].value.search(/[a-z0-9._]+@{1}[a-z]+.[a-z]{2,4}m/) == -1) {
		isValid = false
	}

	if (!isValid) {
		e.preventDefault()
		alert('Не верно заполнены данные.')
	} else {
		window.location.href="/thank-you.html";
    }
}

const pizza_clic = document.getElementById('pizza')
pizza_clic.addEventListener('click', red)

document.querySelectorAll('.draggable').forEach((e) => {
	e.addEventListener('click', additive)
})

const user_name = document.getElementsByName('name')

const user_phone = document.getElementsByName('phone')

const user_email = document.getElementsByName('email')

const user_cancel = document.getElementsByName('cancel')
user_cancel[0].onclick = cliner
const user_btnSubmit = document.getElementsByName('btnSubmit')
user_btnSubmit[0].onclick = okForm
