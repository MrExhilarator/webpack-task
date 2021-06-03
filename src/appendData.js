const appendArticle = (article) => {
    let articleContainer = document.getElementById("article_container");

    let articleElement = document.createElement("div");
    articleElement.classList.add("news_item");

    let imageElement = document.createElement("img");
    imageElement.src = article.urlToImage;
    imageElement.classList.add("img_style");
    articleElement.appendChild(imageElement);

    let infoElement = document.createElement("div");
    infoElement.classList.add("news_info");

    let titleElement = document.createElement("h1");
    titleElement.textContent = article.title;
    titleElement.classList.add("news_title");
    infoElement.appendChild(titleElement);

    let subtitleElement = document.createElement("span");
    let publishDate = article.publishedAt.substring(0, 10);
    subtitleElement.textContent = `Posted on ${publishDate}`;
    subtitleElement.classList.add("news_subtitle");
    infoElement.appendChild(subtitleElement);

    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = article.description;
    descriptionElement.classList.add("news_description");
    infoElement.appendChild(descriptionElement);

    let buttonElement = document.createElement("button");
    buttonElement.classList.add("continue_button");
    buttonElement.textContent = "Find More Here";
    infoElement.appendChild(buttonElement);

    articleElement.appendChild(infoElement);
    articleContainer.appendChild(articleElement);
}

export { appendArticle }