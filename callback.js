function longRunning(callback) {
    setTimeout(() => callback("Not Found"), 5000);
}

var asyncCallBack = () => console.log("Done!");
//longRunning(asyncCallBack);


let promise = new Promise((resolve, reject) => {
    longRunning(reject);
    // sdlfksl;dkf;slkdfl;sk;dfk
});

promise.then((data) => {
    console.log(`Promise completed with data ${data}`)

    // f1
    // f2
    // login
    // product
}).catch((error) => {
    console.log(error);
});

