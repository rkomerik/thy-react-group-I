var arr = [
    1,
    2.6,
    false,
    {
        name: "Gani",
        surname: "Tombalak"
    },
    (item) => console.log(item),
    "Nbr?"
];

//console.log(arr);
//console.log(arr[4]);
//arr[4]("Olay olay");
//arr.forEach(item=>console.log(typeof item));
//console.log(Array.isArray(arr));

var myObj = {
    id: 1,
    type: 0,
    price: 65,
    profit: function () {
        this.price = this.price * 1.10;
    }
};

// Object.keys(myObj).forEach(item =>
//     console.log(`${item} -> ${typeof myObj[item]}`));

//arr.filter(item => typeof item === 'number').forEach(item => console.log(item));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.unshift(0);
// Function Expression
var sqrt = x => x * x;

numbers.map(sqrt).forEach(item=>console.log(item));
console.log(numbers.length);
var poppedOut = numbers.pop();
console.log(`PoppedOut:${poppedOut}`)
console.log(numbers.length);

