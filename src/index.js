import "./styles.css";

import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector("#content");

function clearContent() {
    content.textContent = "";
}

function setActive(button) {
    document.querySelectorAll("nav button").forEach((btn) => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

loadHome();
setActive(homeBtn);

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
    setActive(homeBtn);
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
    setActive(menuBtn);
});

contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
    setActive(contactBtn);
});