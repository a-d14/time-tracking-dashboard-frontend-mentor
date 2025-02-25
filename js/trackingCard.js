export default class TrackingCard {
    #data;
    #imgUrl;
    #mode;

    #firstLoad = true;

    constructor(data, imgUrl, mode) {
        this.#data = data;
        this.#imgUrl = imgUrl;
        this.#mode = mode;
    }

    animateNumber() {
        const hrValueContainer = document.getElementById(`${this.#data.title}`);
        const prevHrValueContainer = document.getElementById(`${this.#data.title}-prev`);

        const currentTargetValue = this.#data['timeframes'][this.#mode].current;
        const prevTargetValue = this.#data['timeframes'][this.#mode].previous;

        const timeToUpdate = this.#mode === 'daily' ? 500 : this.#mode === 'weekly' ? 1000 : 1200;
        const updateFrequency = Math.round(1000 / 60);

        const rateOfUpdationForCurrentValue = (currentTargetValue / timeToUpdate) * updateFrequency;
        const rateOfUpdationForPrevValue = (prevTargetValue / timeToUpdate) * updateFrequency;

        let currCount = 0, prevCount = 0;
        const interval = setInterval(() => {
            if(currCount < currentTargetValue) {
                currCount += rateOfUpdationForCurrentValue;
            }

            if(prevCount < prevTargetValue) {
                prevCount += rateOfUpdationForPrevValue;
            }

            if (currCount >= currentTargetValue && prevCount >= prevTargetValue) {
                clearInterval(interval);
            }

            hrValueContainer.textContent = `${Math.round(currCount)}hrs`;
            prevHrValueContainer.textContent = `${Math.round(prevCount)}hrs`;
        }, updateFrequency);
    }

    render() {
        return `
            <section>
                <img src=${this.#imgUrl}>
                <section>
                    <div>
                        <span>${this.#data.title}</span>
                        <img src='images/icon-ellipsis.svg'>
                    </div>
                    <div>
                        <span id='${this.#data.title}'>0hrs</span>
                        <span>
                            ${this.#mode === 'daily' ? 'Yesterday' : this.#mode === 'weekly' ? 'Last Week' : 'Last Month'} - 
                            <span id='${this.#data.title}-prev'>0hrs<span>
                        </span>
                    </div>
                </section>
            </section>
        `
    }

}