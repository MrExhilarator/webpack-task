const getFooter = () => {
    let footer = document.createElement("footer");
    footer.classList.add("footer_container");

    let info = document.createElement("span");
    info.textContent = "News Feed 2021";
    footer.appendChild(info);
    return footer;
}

export { getFooter }