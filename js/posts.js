function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(r => r.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById("post-container");
    for (const post of posts) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("bg-blue-300");
        postDiv.classList.add("mt-4");
        postDiv.classList.add("py-8");
        postDiv.innerHTML =`
        <h4 class="text-[24px] text-center font-semibold">User ${post.userId}</h4>
        <h5 class="text-[20px] text-center">Post: ${post.title}</h5>
        <p class="text-[16px] text-center">Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPosts();
