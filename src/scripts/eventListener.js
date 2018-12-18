import contactCollection from "./contactCollection"
import contactList from "./contactList"


const eventListener = {
    contactSaver(){
        let contactsContainer = document.querySelector(".contactsContainer");
        contactsContainer.innerHTML = " ";


       const name = document.querySelector("#contact_name").value
       const number = document.querySelector("#contact_number").value
       const address = document.querySelector("#contact_address").value


       const entryToSave = {
        name: name,
        number: number,
        address: address
    }
    console.log(entryToSave);

    // Post to API and passing legoToSave (the object above) as an argument
    contactCollection.postAnEntry(entryToSave)
    .then(word => {
        console.log(word)
        contactList.contactDisplay()})
    }
}

export default eventListener