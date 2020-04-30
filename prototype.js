function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}


var P1 = new Person("Gani", "Tombalak");

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}

console.log(P1.getFullName());
var P2 = new Person("Sumeyye", "Ertas");
console.log(P2.getFullName());

