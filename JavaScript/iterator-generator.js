var person = {
    name:"Gani",
    surname:"Tombalak",
    age:38
};

// person[Symbol.iterator]=function* (){
//     yield this.name;
// };

// console.log([...person]);

// function* topla(sayi) {
//     yield sayi + 1;
//     yield sayi + 2;
//     yield sayi + 3;
// }

// var t = topla(1);
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());

function* ListKeysValues(obj){
    const properties= Reflect.ownKeys(obj);
    for(const propertyKey of properties){
        yield [propertyKey,obj[propertyKey]];
    }
}

for(let [key,value] of ListKeysValues(person)){
    console.log(`${key}=${value}`);
}
