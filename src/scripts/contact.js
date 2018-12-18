const contact = {
  contactBuilderFromJson(contactAsAnObject){
      let contactsContainer = document.createElement("article")
      let userName = document.createElement("h1")
      userName.textContent = contactAsAnObject.name
      let userNumber = document.createElement("p")
      userNumber.textContent = contactAsAnObject.number
      let userAddress = document.createElement("p")
      userAddress.textContent = contactAsAnObject.address

      contactsContainer.appendChild(userName);
      contactsContainer.appendChild(userNumber);
      contactsContainer.appendChild(userAddress);

    return contactsContainer
  }
}

export default contact