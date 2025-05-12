require('dotenv').config();

//request url
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`

// query images
async function getImages(query) {
    const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
    const data = await request.json();
    let gifURL = data.data[0].images.original.url
    console.log(gifURL);
    return gifURL;
}

getImages('dogs');

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)