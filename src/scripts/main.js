import renderComponents from './renderComponents.js';
import eventListeners from './eventListeners.js'

// render counties to the dropdown list in the form
renderComponents.renderCountries();

// render interests the user has already saved
renderComponents.renderInterestCards();

// save new interest after user fills out form
eventListeners.addSaveButtonEventListener();




