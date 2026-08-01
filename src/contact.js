function loadContact() {
    const content = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "📞 +91 9876543210";

    const email = document.createElement("p");
    email.textContent = "✉️ pizzaiolo35@email.com";

    contact.append(heading, phone, email);

    content.appendChild(contact);
}

export default loadContact;