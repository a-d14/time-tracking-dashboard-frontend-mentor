import * as model from './model.js';
import userProfileView from './views/UserProfileView.js';
import trackerDataContainerView from './views/TrackerDataContainerView.js';

function clickHandler(category) {
    model.state.categorySelected = category;
    loadTrackerData();
}

function loadTrackerData() {    
    const filterData = model.state.trackingData.map((data, idx) => {
       return {...data, "timeframes": data["timeframes"][model.state.categorySelected], "imgUrl": model.state.imgUrls[idx]}
    });

    // trackerDataContainerView.render(filterData, true, [trackerDataContainerView.animateNumber]);
    trackerDataContainerView.render({data: filterData, mode: model.state.categorySelected});
    userProfileView.render({data: model.state.userDetails, mode: model.state.categorySelected});
}

async function init() {
    model.loadUser();
    userProfileView.addHandlerSwitchTabs(clickHandler);
    userProfileView.render({data: model.state.userDetails, mode: model.state.categorySelected});

    await model.loadData("data.json");
    loadTrackerData();
}

init();