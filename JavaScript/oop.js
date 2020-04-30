// Literal Object
var myObj = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () { // ES5
        return this.name + " " + this.surname;
    }
    // getFullName: () => { // ES6
    //     return this.name + " " + this.surname;
    // }
};

// console.log(myObj.name);
// console.log(myObj.surname);
// console.log(myObj['getFullName']());
// console.log(myObj.getFullName());

// ES5
// First Class Object
function person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getFullName = function () {
        console.log(this.name + " " + this.surname);
    }
}

var p1 = new person("Mehmet", "Gani");
// console.log(p1.name);
// console.log(p1.surname)
p1.getFullName();
var p2 = new person("Selahattin", "Yildirim");
// console.log(p2.name);
// console.log(p2.surname);
p2.getFullName();
