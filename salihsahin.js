const products = [
  {
    id: 1,
    type: 0,
    price: 65.0,
    profit: function () {
      return this.price * 1.1;
    },
  },
  {
    id: 2,
    type: 0,
    price: 24.99,
    profit: function () {
      return this.price * 1.1;
    },
  },
];

let callFunction = (products) => {
  products.forEach((product) => {
    console.log(product.profit());
  });
};
callFunction(products);
