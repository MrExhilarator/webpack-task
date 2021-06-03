import { displayNews } from "./display.js";

const API_KEY = "9c67dbdc8dde4ca08f5cb625951ef81f";
const getMasala = () => {
    document.getElementById("masala_button").style.display = "none";
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            let {
                articles
            } = jsonData;
            displayNews(articles);
        });
}

export { getMasala }