var myObj = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () {
        return this.name + " " + this.surname;
    }
};
var myObj2 = {
    name: "Emre",
    surname: "Akdemir"
};

var saySomeThing = function (something, additional) {
    console.log(`Object is ${this}`);
    console.log(`${something} ${this.name} (${additional})`);
}

saySomeThing.call(myObj,"Merhaba","Developer");
saySomeThing.call(myObj2,"Merhaba","Developer");

console.log(myObj.getFullName.call(myObj2));

//saySomeThing.call(myObj,"Merhaba","Developer");
// saySomeThing.apply(myObj,["Merhaba","Developer"]);
// var saySometingToMyObject = saySomeThing.bind(myObj);
// saySometingToMyObject("Hello","Developer");