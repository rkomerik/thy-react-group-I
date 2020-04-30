


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

let topMaliyet=0;
let ciro=0;
let kar=0;
function f(products) {
    debugger
    products.forEach(item => {
        topMaliyet+=item.price;
        ciro+=item.profit()
        kar=ciro-topMaliyet
    });
console.log("Toplam Maliyet: "+topMaliyet)
console.log("Toplam Ciro: "+ciro)
console.log("Toplam Kar: "+kar)
}


f(products)
