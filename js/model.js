export const state = {
    userDetails : {},
    trackingData : [],
    imgUrls : ['images/icon-work.svg', 'images/icon-play.svg', 'images/icon-study.svg', 'images/icon-exercise.svg', 'images/icon-social.svg', 'images/icon-self-care.svg'],
    categorySelected : 'weekly'
}

export const loadUser = function() {
    state.userDetails = {
        userImgUrl: "images/image-jeremy.png",
        userName: "Jeremy Robson"
    }
}

export const loadData = async function(url) {
    const response = await fetch(url);
    const data = await response.json();    
    state.trackingData = data;
}