// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

// promise1.then(value1 => {
//     promise2.then(value2 => {
//         let result = value1 + value2;
//         console.log(result);
//     });
// });
// Output:-2
// ----------------------------------------------------------------
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

promise1.then(value1 => {
    promise2.then(value2 => {
        let result = value1 + value2;
        console.log(result);
    });
});
Promise.all(value1, value2 => {
    let result = value1 + value2
    console.log(result)
})
// Output:7