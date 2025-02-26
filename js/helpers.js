export const addObserver = function(elementClass, targetClass, action) {

    const element = document.querySelector(elementClass);
    
    const observer = new MutationObserver(function() {
        const targets = element.querySelectorAll(targetClass);
        targets.forEach((t, idx) => action(t, idx));
        observer.disconnect();
    });

    observer.observe(element, { childList: true, subtree: true });
}

export const animateNumber = function(element, target) {    

    if (!element) return;

    const timeToUpdate = target <= 20 ? 500 : target <= 50 ? 1000 : 1200;
    const updateFrequency = Math.round(1000 / 60);
    const rateOfUpdation = (target / timeToUpdate) * updateFrequency;
    
    let count = 0;
    const interval = setInterval(() => {
        if (count < target) {
            count += rateOfUpdation;
        }

        if (count >= target) {
            count = target;
            clearInterval(interval);
        }

        element.textContent = `${Math.round(count)}hrs`;
    }, updateFrequency);
}

