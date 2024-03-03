const allPost = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');

    const data = await response.json();

    const postContainer = document.getElementById('post-container');
    // console.log(postContainer)
    for (const item of data.posts) {
        console.log(item.image)



        let div = document.createElement("div");
        div.innerHTML = `
                        <div class="mb-6 p-10 flex gap-6 bg-[#C9D7DD] rounded-2xl">
                                 <div>
                                    <div class="w-16 h-16 bg-[white] rounded-lg bg-cover"><img src="${item.image}" alt=""></div>
                                    <div class="statusElement w-2 h-2 bg-[red] rounded-lg relative bottom-16 left-14"></div>
                                </div>
                                <div>
                                    <div class="flex mb-3">
                                        <p class="font-medium mr-7"># ${item.category}</p>
                                        <p class="font-medium">Author : ${item.author.name}</p>
                                    </div>
                                    <div>
                                        <p class="font-bold text-2xl mb-4">${item.title}
                                        </p>
                                        <p>${item.description}</p>
                                        <hr class="mt-4 border-dotted bg-white mb-6">
                                    </div>

                                    <div class=" flex justify-between">
                                        <div class="flex items-center gap-4">
                                            <i class="fa-solid fa-message text-2xl"></i><span>${item.comment_count}</span>
                                            <i class="fa-solid fa-eye text-2xl"></i> <span>${item.view_count}</span>
                                            <i class="fa-solid fa-clock text-2xl"></i><span>${item.posted_time} min</span>
                                        </div>
                                        <div onclick="clickMe()>
                                            <i class="fa-solid fa-message text-2xl"></i>
                                        </div>
                                    </div>
                                </div>
                        </div>
        `
        postContainer.appendChild(div);
    }



}
function clickMe() {
    const addingPost=document.getElementById('adding-post')
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="bg-white flex justify-between p-4 gap-2 font-semibold mt-5 rounded-l">
        <div>10 Kids Unaware of Their Halloween Costume</div>
        <div class="flex items-center gap-3"><i class="fa-solid fa-eye "></i> <span>1,568</span>
        </div>
        </div>`

        addingPost.appendChild(div)
}

allPost();