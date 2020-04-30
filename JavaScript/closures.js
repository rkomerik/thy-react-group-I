// Closures

// Currying
function saySomeThing(word) {
    return function (name) {
        console.log(word + " " + name);
    }
}

//var fResult = saySomeThing("Merhaba");
//fResult("Emre");

function topla(rakam1) {
    return function (rakam2) {
        console.log(rakam1 + rakam2);
    }
}

//var r = topla(3);
//r(5);

function buildArrayOfFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        // let j = i;
        arr.push(((j) => ()=> console.log(j))(i));
    }
    return arr;
}

// buildArrayOfFunctions().forEach(item=>console.log(item));

var rarr = buildArrayOfFunctions();
rarr[0]();
rarr[1]();
rarr[2]();