const products = [
  {
    id: 1,
    type: 0,
    price: 65.0,
  },
  {
    id: 2,
    type: 0,
    price: 24.99,
  },
];
let profit = (price) => price * 1.1;
let callFunction = (products) =>
  products.forEach((product) => console.log(profit(product.price)));
callFunction(products);
