function loadHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("div");
    home.classList.add("home");

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const heading = document.createElement("h1");
    heading.textContent = "Pizzaiolo";

    hero.appendChild(heading);

    const about = document.createElement("section");
    about.classList.add("about");

    const aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "Welcome";

    const description = document.createElement("p");
    description.textContent =
        "Welcome to Pizzaiolo! We serve the best pizzas made with the freshest ingredients.";

    about.appendChild(aboutHeading);
    about.appendChild(description);

    const hours = document.createElement("section");
    hours.classList.add("hours");

    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Opening Hours";

    const hoursList = document.createElement("ul");

    const timings = [
        "Monday - Friday: 9:00 AM - 10:00 PM",
        "Saturday - Sunday: 8:00 AM - 12:00 AM",
    ];

    timings.forEach((time) => {
        const li = document.createElement("li");
        li.textContent = time;
        hoursList.appendChild(li);
    });

    hours.appendChild(hoursHeading);
    hours.appendChild(hoursList);

    const location = document.createElement("section");
    location.classList.add("location");

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Location";

    const address = document.createElement("p");
    address.textContent = "221 Napoli Avenue, Naples, Italy";

    location.appendChild(locationHeading);
    location.appendChild(address);

    home.appendChild(hero);
    home.appendChild(about);
    home.appendChild(hours);
    home.appendChild(location);

    content.appendChild(home);
}

export default loadHome;