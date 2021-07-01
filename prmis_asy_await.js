// eg:1 Promise

// let p = new Promise((resolve, reject) =>{
// let i =1+1;
// if(i == 2) {
// resolve('Success')
// } else{
// reject('Failure')
// }
// });

// p.then((msg) => {
// console.log('Then Block ' + msg)
// }).catch((msg) => {
// console.log('CatchBlock ' + msg);
// })

    // Output: Then Block Success

    // Callback covert to promise 
/*
const userLeft = false;
const userWatchingCatMem = false;

 function watchTutorialCallback(callback, errorCalback) {
    if(userLeft) {
        errorCalback({
            name: 'User Left',
            message: ':('
        })
    } else if( userWatchingCatMem) {
        errorCalback({
            name: 'User watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thubs Up and subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success :' + message)
} , (error) => {
console.log(error.name + '  '+ error.message)
})
*/

//Above callback converted to promise
// Promise also solve call back hell , by the help of then

const userLeft = false;
const userWatchingCatMem = false;

 function watchTutorialPromise() {
     return new Promise((resolve, reject), () => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if( userWatchingCatMem) {
            reject({
                name: 'User watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thubs Up and subscribe')
        }
     });
    
}

watchTutorialPromise().then((message) => {
    console.log('Success :' + message)
}).catch((error) => {
console.log(error.name + '  '+ error.message)
})
