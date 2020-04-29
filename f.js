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
sayHi(); // <- Works perfect!

// nbr();
var nbr = () => console.log("Nbr?");
nbr();

var products = [{
    id: 1,
    type: 0,
    price: 65.0
    profit: function () {
        this.price = this.price * 1.10;
    }
}, {
    id: 2,
    type: 0,
    price: 24.99
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
print(function () { console.log("Nbr?"); });
print(() => console.log("thy"));