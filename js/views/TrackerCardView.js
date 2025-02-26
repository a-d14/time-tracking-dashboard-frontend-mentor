import View from "./View.js";

class TrackerCardView extends View {
    _data;

    _generateMarkup() {
        return `
            <section class='tracker-card tracker-card-${this._data.data.title.toLowerCase().split(" ").join("-")}'>
                <img class='tracker-card__category-image' src=${this._data.data.imgUrl} alt='${this._data.data.title}'>
                <section class='tracker-card__body'>
                    <div class='tracker-card__body-header'>
                        <span class='text-preset-5'>${this._data.data.title}</span>
                        <img src='images/icon-ellipsis.svg' alt='ellipses'>
                    </div>
                    <div class='tracker-card__body-main'>
                        <span class='tracker-card__time text-preset-2'>${this._data.firstVisit ? 0 : this._data.data['timeframes']['current']}hrs</span>
                        <span class='text-preset-4'>
                            ${this._data.mode === 'daily' ? 'Yesterday' : this._data.mode === 'weekly' ? 'Last Week' : 'Last Month'} - 
                            <span class='tracker-card__time'>${this._data.firstVisit ? 0 : this._data.data['timeframes'].previous}hrs<span>
                        </span>
                    </div>
                </section>
            </section>
        `;
    }
}

export default new TrackerCardView();
