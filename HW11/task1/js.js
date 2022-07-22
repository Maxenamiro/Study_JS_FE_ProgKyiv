class UserOut {
	constructor() {
		this.name = prompt('your name')
    	this.sname = prompt('your surname')
	}
	out() {
		document.write(this.name, " ")
		document.write(this.sname)
	}
}
let user = new UserOut()
user.out()
