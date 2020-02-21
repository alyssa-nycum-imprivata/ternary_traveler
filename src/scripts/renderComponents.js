import apiManager from './apiManager.js';
import createComponents from './createComponents.js';

const nameInput = document.querySelector("#name_input");
const descriptionInput = document.querySelector("#description_input");
const costInput = document.querySelector("#cost_input");
const reviewInput = document.querySelector("#review_input");
const placeInput = document.querySelector("#place_input");
const interestId = document.querySelector("#interest_id");

const renderComponents = {
    renderCountries() {
        // renders counties in dropdown list in form

        const countryDropdown = document.querySelector("#place_input");

        apiManager.getCountries()
            .then(countries => {
                countries.forEach(country => {
                    countryDropdown.innerHTML += createComponents.countryDropdown(country)
                })
            })
    },
    clearInterestForm() {
        // clears the form after a user clicks save
        
        nameInput.value = "";
        descriptionInput.value = "";
        costInput.value = "";
        placeInput.value = "";
    },
    renderInterestCards() {
        // adds each interest to the DOM

        const interestsLog = document.querySelector("#interests_log");

        apiManager.getAllInterests()
            .then(interests => {
                interestsLog.innerHTML = "";

                if (interests.length === 0) {
                    interestsLog.innerHTML = `
                    <h4>You have no saved interests. Fill out the form above to save a place you'd like to go!</h4>
                    `
                } else {
                    interests.forEach(interest => {
                        interestsLog.innerHTML += createComponents.createInterestCard(interest)
                    })
                }
            })
    }
}

export default renderComponents;