// Task 1: .then() দিয়ে — response.ok check সহ
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response=>{
    if(!response.ok){
        throw new Error("User not found or ID is invaild",);
    }       
    return response.json();   
})
.then(data=>console.log(data))
.catch(error=>console.log(error))

// Task 2: async/await দিয়ে same কাজ
async function getUser(id) {
  try{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){
        throw new Error("User Not Found");
    }
    const data= await response.json();
    console.log(data);
  }
  catch(error){
    console.log(error);
  }
}

getUser(1); // সফল
getUser(999); // error handle
