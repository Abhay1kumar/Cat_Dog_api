
const dog_btn = document.getElementById('dog-btn');
const cat_btn = document.getElementById('cat-btn');

const cat_img = document.getElementById('cat-img');
const dog_img = document.getElementById('dog-img');



dog_btn.addEventListener('click', async function () {
    try {

        let data = await fetch("https://dog.ceo/api/breeds/image/random")
        let response = await data.json()


        // console.log(response.message);
        dog_img.innerHTML = `<img src="${response.message}" width="300" height="280" alt="dog" />`;

    } catch (e) {
        console.log(e)
    }
})
//cat api......................


cat_btn.addEventListener('click', async function () {
    try {


        let data = await fetch("https://api.thecatapi.com/v1/images/search")
        let response = await data.json()


        // console.log(response[0].url);
        cat_img.innerHTML = `<img src="${response[0].url}" width="300" height="280" alt="cat" />`;

    } catch (e) {
        console.log(e)
    }
})

