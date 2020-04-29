var products = [
    {
      id: 1,
      type: 0,
      price: 65.0,
      profit: function () {
        return this.price = this.price * 1.1;
      },
    },
    {
      id: 2,
      type: 0,
      price: 24.99,
      profit: function () {
        return this.price = this.price * 1.05;
      },
    },
  ];
  
  function f(products) {
      products.forEach(item=>console.log(item.profit());
  }
  
  f(products);
  