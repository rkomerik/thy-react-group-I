var product=[{

    id:1,
    type:0,
    price:65.0,
    percent:2,
    profit:function(){
        return price =this.price*this.percent;
    }
    
},
{id:2,
type:0,
price:30.0,
percent:2,
profit:function(){
    return price =this.price*this.percent;
}
}
]

;

function f(product){
    for(let t=0;t<product.length;t++){
        product[t].profit();
    

 console.log("profit ="+product[t].profit());
 

}
}
f(product);
