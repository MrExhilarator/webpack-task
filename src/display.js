import { appendArticle } from "./appendData";
const displayNews = (articles) => {
    for (let article of articles) {
        appendArticle(article);
    }
}

export { displayNews }