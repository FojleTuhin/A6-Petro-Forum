const allPost = async() => {
    const response =await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');

    const data =await response.json();
    console.log(data.posts)

    for(const item of data.posts){
        console.log(item.title)
    }
}

allPost();