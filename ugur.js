

var products =[{id:1,
                price:2.1,
                profit: function () {
                   return this.price = this.price * 1.30
                }},

                {id:2,
                    price:3.1,
                    profit: function() {
                       return this.price = this.price * 3.30
                    }}
            ]


            
             function calculate() {
                 
                var total;

                products.forEach(item =>total += item.profit);
                 
                return total;
             }

                
             calculate();
            