const myPromise= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("টাকা পেয়েছি!");
    },2000)
})

myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

console.log("Promise এর জন্য অপেক্ষা না করে কাজ চলছে...");