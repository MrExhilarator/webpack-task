import { head } from "lodash";

const getBodyContainer = () => {
    let backgroundContainer = document.createElement("div");
    backgroundContainer.classList.add("background_container");

    let headElement = document.createElement("h1");
    headElement.classList.add("head_style");
    headElement.textContent = "ALL NEWS";
    backgroundContainer.appendChild(headElement);

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button_container");

    let button = document.createElement("button");
    button.classList.add("custom_button");
    button.id = "masala_button";
    button.textContent = "Gimme some masala";
    buttonContainer.appendChild(button);
    backgroundContainer.appendChild(buttonContainer);

    let articleContainer = document.createElement("div");
    articleContainer.id = "article_container";
    backgroundContainer.appendChild(articleContainer);
    return backgroundContainer;
}

export { getBodyContainer }