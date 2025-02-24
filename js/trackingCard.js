export default class TrackingCard {
    #data;
    #imgUrl;
    #mode;

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

        let currCount = 0, prevCount = 0;
        const interval = setInterval(() => {
            if(currCount < currentTargetValue) {
                currCount++;
            }

            if(prevCount < prevTargetValue) {
                prevCount++;
            }

            if (currCount >= currentTargetValue && prevCount >= prevTargetValue) {
                clearInterval(interval);
            }

            hrValueContainer.textContent = `${currCount}hrs`;
            prevHrValueContainer.textContent = `${prevCount}hrs`;
        }, this.#mode === 'daily' ? 100 : this.#mode === 'weekly' ? 20 : 10);
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