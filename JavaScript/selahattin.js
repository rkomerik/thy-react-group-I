
var products=[
{
    id:1,
    type:0,
    price:65,
    profit:function(){
        this.price=this.price*1.10;
    }
},
{
    id:2,
    type:0,
    price:24.99,
    profit:function(){
        this.price=this.price*1.05;
    }
}

]


function f(products){
for(var i=0;i<products.length;i++){
    products[i]['profit']();
    console.log(products[i]['price']);
}
}

f(products);