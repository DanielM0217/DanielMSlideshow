const container = document.querySelector('#slideshow_container');
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

class Slide {
    constructor(image, name, score, synopsis){
            this.image = image;
            this.name = name;
            this.score = score;
            this.synopsis = synopsis;
        }
    
        displaySlide(index) {
            const slideButton = document.createElement('a');
            slideButton.href = `#slide-${index + 1}`;
            slideButton.innerText = `${index + 1}`
            slider.appendChild(slideButton);
            
            const slideDiv = document.createElement('div');
            slideDiv.id = `slide-${index + 1}`;

            const imageEl = document.createElement('img');
            imageEl.src = this.image;
            slideDiv.appendChild(imageEl);

            const sectionEl = document.createElement('section');

            const nameEl = document.createElement('h5');
            nameEl.innerText = this.name;
            sectionEl.appendChild(nameEl);

            const scoreEl = document.createElement('h6');
            scoreEl.innerText = `Score: ${this.score}`;
            sectionEl.appendChild(scoreEl);

            const synopsisEl = document.createElement('p');
            synopsisEl.innerText = this.synopsis;
            sectionEl.appendChild(synopsisEl);

            slideDiv.appendChild(sectionEl);
            slides.appendChild(slideDiv);
            return slideDiv;
            
        }
    }


function displaySlides(data) {

    for (let i = 0; i < data.data.length; i++){
        let Slide1 = new Slide(data.data[i].images.jpg.large_image_url, data.data[i].title_english || data.data[i].title, data.data[i].score, data.data[i].synopsis);
        Slide1.displaySlide(i);
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
