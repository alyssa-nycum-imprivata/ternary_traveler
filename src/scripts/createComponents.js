const createComponents = {
    countryDropdown(country) {
        // creates HTML for countries in dropdown list in form

        return `
        <option value=${country.id}>${country.name}</option>
        `;
    },
    createInterestCard(interest) {
        // creates HTML for each interest added

        return `
        <div class="interest_output interest--${interest.id}">
            <h3>${interest.name}</h3>
            <h4>${interest.place.name}</h4>
            <p>Description: ${interest.description}</p>
            <div id="fieldsToEdit">
                <p>Cost: $${interest.cost}</p>
            </div>
            <button id="edit--${interest.id}" class="button edit_buttons">Edit</button>
            <button id="delete--${interest.id}" class="button delete_buttons">Delete</button>
        </div>
        `;
    }
}

export default createComponents;