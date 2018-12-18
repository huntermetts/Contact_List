import contactForm from "./contactForm"
import contactList from "./contactList"
import eventListener from "./eventListener"


contactForm.buildEmptyContactForm();
let saveButton = document.getElementById("contact_save")
saveButton.addEventListener("click", eventListener.contactSaver)
contactList.contactDisplay();
