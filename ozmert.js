


let products=[{
    id:1,
    price:10,
    type:0    ,
    profit:function () { 
        return this.price*1.05;  
    }
},
{
    id:2,
    price:25,
    type:1    ,
    profit:function () {
     return this.price*1.05;      
    }
}
]

var topMaliyet=0
var kar=0
function f(products) {
for (let i = 0; i < products.length; i++) {
    topMaliyet+=products[i].price;
    kar+=products[i].profit()
}
console.log(topMaliyet)
console.log(kar)
}


f(products)
