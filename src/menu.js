function loadMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    menu.appendChild(heading);

    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    const pizzas = [
        {
            name: "Margherita",
            description: "Classic tomato sauce, mozzarella, and fresh basil.",
            price: "€5.50",
        },
        {
            name: "Pepperoni",
            description: "Loaded with premium pepperoni and mozzarella.",
            price: "€8.20",
        },
        {
            name: "BBQ Chicken",
            description: "Grilled chicken, BBQ sauce, onions, and cheese.",
            price: "€14.60",
        },
        {
            name: "Veggie Supreme",
            description: "Bell peppers, olives, onions, mushrooms, and corn.",
            price: "€7.10",
        },
    ];

    pizzas.forEach((pizza) => {
        const card = document.createElement("div");
        card.classList.add("pizza-card");

        const name = document.createElement("h2");
        name.textContent = pizza.name;

        const description = document.createElement("p");
        description.textContent = pizza.description;

        const price = document.createElement("p");
        price.textContent = pizza.price;

        card.append(name, description, price);

        grid.appendChild(card);
    });

    menu.appendChild(grid);
    content.appendChild(menu);
}

export default loadMenu;