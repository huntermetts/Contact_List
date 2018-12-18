const contactForm = {
  buildEmptyContactForm(){
    let userContactForm =
    `<fieldset>
        <label for="contact_name">Name:</label>
        <input id="contact_name" name="contact_name" type="text" autofocus/>
    </fieldset>
    <fieldset>
        <label for="contact_number">Number:</label>
        <input id="contact_number" name="contact_number" type="text" autofocus/>
    </fieldset>
    <fieldset>
        <label for="contact_address">Address:</label>
        <input id="contact_address" name="contact_address" type="text" autofocus/>
    </fieldset>
 <button id="contact_save">Create New Contact</button>`

 let indexHtmlArticle = document.querySelector(".formContainer")
 indexHtmlArticle.innerHTML = userContactForm
  }
}

export default contactForm