import apiManager from './apiManager.js';
import createComponents from './createComponents.js'

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
    renderInterestCards() {
        // adds each interest to the DOM
        
        const interestsLog = document.querySelector("#interests_log");

        apiManager.getAllInterests()
            .then(interests => {
                interestsLog.innerHTML = "";

                interests.forEach(interest => {
                    interestsLog.innerHTML += createComponents.createInterestCard(interest)
                })
            })
    }
}

export default renderComponents;