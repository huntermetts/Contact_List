const contactCollection = {
  getAllEntries() {
    return fetch("http://localhost:8088/contact")
    .then(response => response.json())
  }
}

export default contactCollection