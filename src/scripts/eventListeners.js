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
    addNewSaveButtonEventListener() {
        mainContainer.addEventListener("click", () => {
            if (event.target.id.startsWith("save")) {

                // if any of the form fields are left blank, alert user to fill out all fields

                if (placeInput.value.length === 0 || nameInput.value.length === 0 || descriptionInput.value.length === 0 || costInput.value.length === 0) {
                    alert("Please fill out all fields")
                } else {

                    // otherwise, create new object, add the interest to the DOM, and clear the form

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
            }
        })
    },
    addDeleteButtonsEventListener() {
        mainContainer.addEventListener("click", () => {
            if (event.target.id.startsWith("delete")) {

                // if a user clicks delete on an interest, alert them asking to confirm. If confirmed, delete the interest.

                if (confirm("Are you sure you want to delete this point of interest?")) {
                    const interestIdToDelete = event.target.id.split("--")[1];

                    apiManager.deleteInterest(interestIdToDelete)
                        .then(renderComponents.renderInterestCards)
                }
            }
        })
    },
}

export default eventListeners;