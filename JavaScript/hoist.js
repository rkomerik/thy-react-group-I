// Hoisting
console.log(this);

function Greeter(name){
    //var randomWord='Have a nice day';
    console.log(`Hello ${name}`);
    wordSir(this.randomWord);
}

function wordSir(word){
    console.log(word + " Sir.");
}

Greeter(fullName);

//var fullName="Mehmet Gani";
var randomWord='How is it going?';
