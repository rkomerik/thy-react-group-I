
var products = [{
    price: any = 65,
    profit: function () {
        this.price = this.price * 1.10;
    }
},
{
    price: any = 70,
    profit: function () {
        this.price = this.price * 1.15;
    }
}
]

function f(products) {
    let profitSum = 0;
    let sum = 0;

    products.forEach(item => {

        sum = sum + item['price'];
        profitSum = profitSum + item.profit();

    });

    return (profitSum - sum);
}

console.log(f(products));
