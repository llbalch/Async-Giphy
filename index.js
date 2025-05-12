require('dotenv').config();

//request url
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`

// query images
async function getImages(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
    const data = await response.json();
    const gifs = json.data
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const randomGif = gifs[randomIndex].images.original.url
    return randomGif
}

async function helperFunction(){
 await getImages('dogs');
}


// Print out value of API key stored in .env file
console.log(process.env.API_KEY)