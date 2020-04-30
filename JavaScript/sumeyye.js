var products = [];
var product1 = {
    id: 1, type: "test", price: 46,
    profit: function () {
        return this.price * 1.2
    }
};
products[0] = product1;
var product2 = {
    id: 2, type: "test2", price: 66,
    profit: function () {
        return this.price * 1.2
    }
};
products[2] = product2;

function myFunc(params) {
    let total = 0;
    params.forEach(p => total = total + p.profit());
    console.log(total);
};

myFunc(products);