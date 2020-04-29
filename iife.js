// Immediately Invoked Functions Expressions

var name="Gani";

(function(name){
    console.log(`Hello ${name}`);
})(name);

(name=>console.log(`Hello ${name} from lambda`))(name);
//sayHi("Gani");