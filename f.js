// Function Statement and Function Expression

// Function Statement
function greeting() {
    console.log("hi");
}

// Function Expression
// sayHi() <- Error 
var sayHi = function () {
    console.log("I said hi");
}
// sayHi(); // <- Works perfect!

// nbr();
var nbr = () => console.log("Nbr?");
//nbr();

var products = [{
    id: 1,
    type: 0,
    price: 65.0,
    profit: function () {
        this.price = this.price * 1.10;
    }
}, {
    id: 2,
    type: 0,
    price: 24.99,
    profit: function () {
        this.price = this.price * 1.05;
    }
}];

function f(products) {

}


function print(param) {
    param();
}

// var word = "Hello";
// word = function () { console.log("Olaylar olaylar"); }
// print(function () { console.log("Nbr?"); });
// print(() => console.log("thy"));


var a = [
    { name: "Gani" },
    { name: "Ibrahim" },
    { name: "Guvenc" },
    { name: "Selahattin" },
    { name: "Ayse" },
    { name: "Adem" },
    { name: "Ahmet" }
];
var b = [
    "Gani",
    "Ibrahi",
    "Guvenc",
    "Selahatin",
    "Ayse",
    "Adem",
    "Ahmet"
];
//a.forEach(item => console.log(item.name));
var print = (item) => console.log(item);
// b.forEach(print);

console.log(this);


function f1() {
    console.log(`f1:${this}`);
}

var f2 = function () {
    console.log(`f2:${this}`);
}
f1();
f2()

var myObj = {
    name: "This is an object",
    print: function () {
        var self = this;
        this.name = 'This is updated object';
        console.log(self)
        var update = function (newValue) {
            self.name = newValue;
        }
        update("This is updated object of updated object");
        console.log(self);
    }
};
myObj.print();