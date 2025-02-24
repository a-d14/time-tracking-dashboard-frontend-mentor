import TrackingCard from "./trackingCard.js";

const trackerContainer = document.querySelector('.trackers');
const imgUrls = ['images/icon-work.svg', 'images/icon-play.svg', 'images/icon-study.svg', 'images/icon-exercise.svg', 'images/icon-social.svg', 'images/icon-self-care.svg'];

function loadCards(selectedOption) {
    trackerContainer.innerHTML = '<span>Loading...</span>';

    setTimeout(async () => {
        const res = await fetch('../data.json');
        const trackerData = await res.json();
        let cards = trackerData.map((data, idx) => new TrackingCard(data, imgUrls[idx], selectedOption.toLowerCase()));
        
        trackerContainer.innerHTML = cards.reduce((acc, card) => {
            acc += card.render();
            return acc;
        }, '');
    
        cards.forEach((card) => card.animateNumber());
    }, 2000);
}

document.querySelector('.selector').addEventListener('click', (e) => {
    const chosenOption = e.target.textContent;
    console.log(chosenOption);
    
    loadCards(chosenOption);
});

loadCards('daily')