const products = [
    {
        id:1,
        type:3,
        price:65.0,
        count:7,
<<<<<<< HEAD
<<<<<<< HEAD
        totalAmout: function(){ this.count * this.price;} 
=======
        totalAmout: function(){ return this.count * this.price;} 
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
=======
        totalAmout: function(){ return this.count * this.price;} 
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
    },
    {
        id:2,
        type:0,
        price:42.3,
        count:4,
<<<<<<< HEAD
<<<<<<< HEAD
        totalAmout: function(){ this.count * this.price;} 
=======
        totalAmout: function(){ return this.count * this.price;} 
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
=======
        totalAmout: function(){ return this.count * this.price;} 
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
    },
    {
        id:3,
        type:1,
        price:65.0,
        count:5,
<<<<<<< HEAD
<<<<<<< HEAD
        totalAmout: function(){ this.count * this.price;} 
=======
        totalAmout: function(){ return this.count * this.price;} 
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
=======
        totalAmout: function(){ return this.count * this.price;} 
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
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

<<<<<<< HEAD
<<<<<<< HEAD
console.log(result);
=======
console.log(result);
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
=======
console.log(result);
>>>>>>> 98f025a2865ac62c1b62b77b7fbf58fbabf2eb89
