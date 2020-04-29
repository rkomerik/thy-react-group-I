function myObj(price) {
  this.id = 1;
  this.type = 0;
  this.price = price;
  this.profit = function () {
    this.price = this.price * 1.1;
  };
}

function result(params) {
  var total = 0;
  for (let index = 0; index < params.length; index++) {
    params[index].profit();
    //console.log(params[index].price);
    total += params[index].price;
  }
  console.log(total);
}

result([new myObj(10), new myObj(20), new myObj(30), new myObj(40)]);
