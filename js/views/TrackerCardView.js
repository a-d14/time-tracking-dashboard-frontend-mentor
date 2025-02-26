import View from "./View.js";

class TrackerCardView extends View {
    _data;

    _generateMarkup() {
        return `
            <section class='tracker-card'>
                <img src=${this._data.data.imgUrl}>
                <section class='tracker-card__body'>
                    <div class='tracker-card__body-header'>
                        <span>${this._data.data.title}</span>
                        <img src='images/icon-ellipsis.svg'>
                    </div>
                    <div class='tracker-card__body-main'>
                        <span class='tracker-card__time'>${this._data.firstVisit ? 0 : this._data.data['timeframes']['current']}hrs</span>
                        <span>
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
