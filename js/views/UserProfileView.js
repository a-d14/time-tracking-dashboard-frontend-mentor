import View from "./View.js";
// class UserProfile {
//     #imgUrl;
//     #userName;

//     #userProfile = document.querySelector('.user-profile');

//     constructor(imgUrl, userName) {
//         this.#imgUrl = imgUrl;
//         this.#userName = userName;
//     }

//     addTrackerSwitchHandler(handler) {
//         this.#userProfile.addEventListener("click", function(e) {
//             const eventTarget = e.target;

//             if(eventTarget.matches("li")) {
//                 const value = eventTarget.value;
//                 handler(value);
//             }

//         });
//     }

//     render() {
//         return `
//             <section>
//                 <img src=${this.#imgUrl} alt=${this.#imgUrl.toLowerCase()}>
//                 <div>
//                     <span>Report for</span>
//                     <h2>${this.#userName}</h2>
//                 </div>
//             </section>
//             <ul class="selector">
//                 <li>Daily</li>
//                 <li>Weekly</li>
//                 <li>Monthly</li>
//             </ul>
//         `;
//     }
// }

// expo

class UserProfileView extends View {
    _data;
    _parentElement = document.querySelector('.user-stats-component__user-profile');

    _generateMarkup() {
        return `
            <section class='user-stats-component__user-profile__user'>
                <img src=${this._data.userImgUrl} alt=${this._data.userName.toLowerCase()}>
                <div>
                    <span class='text-preset-4'>Report for</span>
                    <h2 class='text-preset-1'>${this._data.userName}</h2>
                </div>
            </section>
            <ul class='user-stats-component__user-profile__selector text-preset-3'>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
        `;
    }

    addHandlerSwitchTabs(handler) {
        this._parentElement.addEventListener('click', (e) => {
            if(e.target.matches('li')) {
                handler(e.target.textContent.toLowerCase());
            }
        })
    }

}

export default new UserProfileView();