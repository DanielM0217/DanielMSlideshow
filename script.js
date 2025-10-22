const container = document.querySelector('#slideshow_container');

class Slide {
    constructor(image, name, score){
            this.image = image;
            this.name = name;
            this.score = score;
        }
    
        displaySlide() {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('slide');

            const imageEl = document.createElement('img');
            imageEl.src = this.image;

            const nameEl = document.createElement('h2');
            nameEl.innerText = this.name;

            const scoreEl = document.createElement('h3');
            scoreEl.innerText = this.score;

        }
    }


function displaySlides(data) {

    for (let i = 0; i < data.data.length; i++){
        const element = document.createElement('div');
        let Slide1 = new Slide(data.data[i].images.jpg.large_image_url, data.data[i].title_english, data.data[i].score);
        console.log(Slide1)
    }
}


async function getAnime() {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?page=1&limit=10');
        const data = await response.json();
        console.log(data.data)
        displaySlides(data)
    } 

getAnime();
