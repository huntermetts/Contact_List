import contactCollection from "./contactCollection"
import contact from "./contact"

const contactList = {
    contactDisplay(){
        // Where the data is processed from collectEntries
   contactCollection.getAllEntries()
    .then(allEntries => {
      let contactDocFragment = document.createDocumentFragment();
        allEntries.forEach(entryItem => {
        let entryHtml = contact.contactBuilderFromJson(entryItem)
        console.log(entryHtml)
        contactDocFragment.appendChild(entryHtml)
      })
        let outputContact = document.querySelector(".contactsContainer")
        outputContact.appendChild(contactDocFragment)
    })
  }
}

export default contactList