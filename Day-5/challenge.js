
// একটা blog post viewer বানাও
// jsonplaceholder use করে

// Step 1: /posts থেকে সব posts আনো
// Step 2: map() দিয়ে শুধু id আর title রাখো
// Step 3: filter() দিয়ে শুধু প্রথম ৫টা দেখাও
// Step 4: console.log করো

async function getBlogPosts() {
    try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if(!response.ok){
            throw new Error("Posts not found");
        }
        const data = await response.json();
        console.log(data) ; 

        const newBlogsAfterMap=data.map(blog=>({
            id:blog.id,
            title:blog.title
        }));
        console.log('Mapped blog with id and title', newBlogsAfterMap);

        const newFilteredBlogs = newBlogsAfterMap.filter(blog=>blog.id<=5);
        console.log('Filtered 5 Blogs',newFilteredBlogs);
        
    } catch (error) {
        console.log(error)
    }
}

getBlogPosts();

// Expected output:
// [
//   { id: 1, title: "..." },
//   { id: 2, title: "..." },
//   { id: 3, title: "..." },
//   { id: 4, title: "..." },
//   { id: 5, title: "..." },
// ]