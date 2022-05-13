function sayHello() {
    return new Promise((resolve, reject) => {
        resolve("hello!!!");
    });
}


// sayHello().then((resolveData) => {
//     console.log(resolveData);
//     return resolveData;
// }).then((resolveData) => {
//     console.log(resolveData);
// }).catch(error => {
//     console.log(error);
// });

//async
async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();