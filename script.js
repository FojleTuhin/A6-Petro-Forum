const loadPhone = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`);
    const data = await res.json();
    const phones = data.posts
    // console.log(phones)
    displayPhone(phones);
}


const allPost = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);

    const data = await response.json();
    const postContainer = document.getElementById('post-container');



    for (const item of data.posts) {


        let Active = " bg-[red]"
        if (item.isActive) {
            Active = `bg-[green]`
        }
        let div = document.createElement("div");
        div.innerHTML = `
                        <div class="mb-6 p-3 md:p-10 flex gap-3 md:gap-6 bg-[#C9D7DD] rounded-2xl w-full">
                                 <div>
                                    <div class="md:w-16 md:h-16 w-10 h-10 bg-[white] rounded-lg bg-cover"><img src="${item.image}" alt=""></div>
                                    <div class=" w-3 h-3 ${Active} rounded-lg relative md:bottom-16 md:left-14 bottom-10 left-8"> </div>
                                    
                                </div>
                                <div>
                                    <div class="md:flex mb-3">
                                        <p class="font-medium mr-7"># ${item.category}</p>
                                        <p class="font-medium">Author : ${item.author.name}</p>
                                    </div>
                                    <div>
                                        <p class="font-bold text-2xl mb-4">${item.title}
                                        </p>
                                        <p class="description">${item.description}</p>
                                        <hr class="mt-4 border-dotted w-full bg-white mb-6">
                                    </div>

                                    <div class=" md:flex justify-between">
                                        <div class="flex  items-center gap-4">
                                            <i class="fa-solid fa-message text-2xl"></i><span>${item.comment_count}</span>
                                            <i class="fa-solid fa-eye text-2xl view-counts"></i> <span>${item.view_count}</span>
                                            <i class="fa-solid fa-clock text-2xl "></i><span>${item.posted_time} min</span>
                                        </div>
                                        <div class="adding">
                                            <i onclick="clickMe()" class="fa-solid fa-message text-2xl "></i>
                                        </div>
                                    </div>
                                </div>
                        </div>
        `
        postContainer.appendChild(div);

    }



}

let count = 0;






 function clickMe() {

   
        const addingPost = document.getElementById('adding-post')
        const div = document.createElement('div');
        div.innerHTML = `
                        <div class="bg-white flex mb-4 justify-between pl-4 pr-4  font-semibold mt-4 rounded-l">
                            <div>10 Kids Unaware of Their Costume</div>
                            <div class="flex items-center gap-3"><i class="fa-solid fa-eye "></i> <span>1568</span>
                            </div>
                        </div>

    `

        addingPost.appendChild(div)

        count++;
        document.getElementById('count').innerText = count;

    }





const latestPost = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');

    const data = await response.json();

    const card = document.getElementById('card')


    for (const item of data) {

        let date = " No Publish Date"
        if (item.author.posted_date) {
            date = item.author.posted_date;
        }

        let designation = "Unknown"
        if (item.author.designation) {
            designation = item.author.designation;
        }


        let div2 = document.createElement("div");
        div2.innerHTML = `
        <div class="mt-12 flex mb-24">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="${item.cover_image}" alt="Shoes"
                                class="rounded-xl" />
                        </figure>
                        <div class="card-body ">
                            <div class="flex gap-4 items-center">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p>${date}</p>
                            </div>
                            <p>${item.title}</p>
                            <p>${item.description}</p>

                            <div class="flex gap-3 mt-3">
                                <div class="bg-cover w-14 h-14 rounded-full">
                                    <img class="rounded-full" src="${item.profile_image}" alt="">
    
                                </div>
                                <div>
                                    <p class="font-bold">${item.author.name}</p>
                                    <p>${designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                </div>
        `
        card.appendChild(div2)
    }
}


// handle search button 

function handleSearch() {

    toogleLoadingSpinner()
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);
    allPost(posts)
}

const displayPhone = phones => {
    const postContainer = document.getElementById('post-container');


    postContainer.textContent = ""
    for (const item of phones) {

        let Active = " bg-[red]"
        if (item.isActive) {
            Active = `bg-[green]`
        }
        let div = document.createElement("div");
        div.innerHTML = `
                        <div class="mb-6 p-10 flex gap-6 bg-[#C9D7DD] rounded-2xl">
                                 <div>
                                    <div class="w-16 h-16 bg-[white] rounded-lg bg-cover"><img src="${item.image}" alt=""></div>
                                    <div class=" w-3 h-3 ${Active} rounded-lg relative bottom-16 left-14"> </div>
                                    
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
                                        <hr class="mt-4 border-dotted w-full bg-white mb-6">
                                    </div>

                                    <div class=" flex justify-between">
                                        <div class="flex items-center gap-4">
                                            <i class="fa-solid fa-message text-2xl"></i><span>${item.comment_count}</span>
                                            <i class="fa-solid fa-eye text-2xl"></i> <span>${item.view_count}</span>
                                            <i class="fa-solid fa-clock text-2xl"></i><span>${item.posted_time} min</span>
                                        </div>
                                        <div onclick="clickMe()">
                                            <i class="fa-solid fa-message text-2xl"></i>
                                        </div>
                                    </div>
                                </div>
                        </div>
        `
        postContainer.appendChild(div);
    }
}

const toogleLoadingSpinner = () => {
    const loadingSpinner = document.getElementById('loading-spinner');

    loadingSpinner.classList.remove('hidden');
    setTimeout(() => {
        loadingSpinner.classList.add('hidden');
    }, (2000));

}




allPost();
latestPost();