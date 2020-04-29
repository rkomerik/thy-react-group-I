// Execution Context and Scope Chain

var word= "Begum-g";
//console.log(this);
function a(){
    //var word="Begum-a"
    console.log(`a:${word}`);
    //console.log(this);
    function b(){
        // var word= "Begum-b"
        console.log(`b:${word}`);
        //console.log(this);
    }    
    b();
}


//console.log(a);
//console.log(this);
a();
console.log(this);