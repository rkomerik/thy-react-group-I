const products = [
    {
        id:1,
        type:3,
        price:65.0,
        count:7,
        totalAmout: function(){ return this.count * this.price;} 
    },
    {
        id:2,
        type:0,
        price:42.3,
        count:4,
        totalAmout: function(){ return this.count * this.price;} 
    },
    {
        id:3,
        type:1,
        price:65.0,
        count:5,
        totalAmout: function(){ return this.count * this.price;} 
    },
];


function calculator(products){
    let totalAmout = 0;

    for(let i = 0; i< products.length;i++){
       totalAmout +=products[i].totalAmout();
    }

    return totalAmout;
}

let result = calculator(products);

console.log(result);

