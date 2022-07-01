function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.firstName[0].toLowerCase() + this.secondName.toLowerCase()) ;
        },
        getAge: function () {
            let now = new Date();
            let nowYear = now.getFullYear();

            let iDate = this.birthday.substring(0, 2);
            let iMonth = this.birthday.substring(3, 5);
            let iYear = this.birthday.substring(6, 10);

            let birthDate = new Date(iYear, iMonth-1, iDate);
            let birthYear = birthDate.getFullYear();
            let age = nowYear - birthYear;
            if (now < new Date(birthDate.setFullYear(nowYear))) {
                age = age - 1;
            }
            return console.log(age);
        },
        getPassword: function () {

            return console.log(this.firstName[0].toUpperCase() + this.secondName.toLowerCase() + this.birthday.substring(6,10));
        }
    };
    newUser.firstName = prompt("name");
    newUser.secondName = prompt("surname");
    newUser.birthday = prompt("birthday (dd.mm.yy) ");
    newUser.getAge();
    newUser.getPassword();

    return newUser;
}
createNewUser();