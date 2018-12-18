const contactCollection = {
  getAllEntries() {
    return fetch("http://localhost:8088/contact")
    .then(response => response.json())
  },

  postAnEntry(entryToSave){
    return fetch("http://localhost:8088/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Where the argument is called and the object is passed that has been declared in eventListener.js
        body: JSON.stringify(entryToSave)
            })
            .then(response => response.json())
  }
}

export default contactCollection