import apiManager from './apiManager.js';
import renderComponents from './renderComponents.js';

const nameInput = document.querySelector("#name_input");
const descriptionInput = document.querySelector("#description_input");
const costInput = document.querySelector("#cost_input");
const reviewInput = document.querySelector("#review_input");
const placeInput = document.querySelector("#place_input");
const interestId = document.querySelector("#interest_id");

const mainContainer = document.getElementById("mainContainer")

const eventListeners = {
    addSaveButtonEventListener() {
        // when the user clicks save after filling out the form, save the interest as an object to the database, add it to the DOM, and clear the form

        mainContainer.addEventListener("click", () => {
            if (event.target.id.startsWith("save")) {

                const newInterestObject = {
                    "placeId": placeInput.value,
                    "name": nameInput.value,
                    "description": descriptionInput.value,
                    "cost": costInput.value
                }
    
                apiManager.addNewInterest(newInterestObject)
                    .then(() => {
                        renderComponents.renderInterestCards(),
                        renderComponents.clearInterestForm()
                    })
            }
        })
    },
    addDeleteButtonEventListener() {
        // delete the specific interest the user selects 
        
        mainContainer.addEventListener("click", () => {
            if(event.target.id.startsWith("delete")) {
                const interestIdToDelete = event.target.id.split("--")[1];

                apiManager.deleteInterest(interestIdToDelete)
                    .then(renderComponents.renderInterestCards)
            }
        })
    }
}

export default eventListeners;