import { addObserver, animateNumber } from "../helpers.js";
import trackerCardView from "./TrackerCardView.js";
import View from "./View.js";

class TrackerDataContainerView extends View {
    _data;
    _mode;
    _parentElement = document.querySelector('.c');
    _visitedCategories = [];

    _generateMarkup(firstVisit = true) {
        return this._data.map((data) => {
            return trackerCardView.render({data, mode: this._mode, firstVisit}, false)
        }).join("");
    }

    render(data, render = true) {        
        this._data = data.data;
        this._mode = data.mode;        

        let markup;
        if(!this._visitedCategories.includes(this._mode)) {

            markup = this._generateMarkup();

            const allTimes = this._data.map((d) => [d["timeframes"].current, d["timeframes"].previous]).flat();
            
            addObserver(".c", ".tracker-card__time", (ele, idx) => {
                animateNumber(ele, allTimes[idx]);
            });

            this._visitedCategories.push(this._mode);
        } else {
            markup = this._generateMarkup(false);
        }

        if(!render) return markup;
        
        this._clear();
        this._parentElement.insertAdjacentHTML('afterBegin', markup);
    }
}

export default new TrackerDataContainerView();