const getHeader = () => {
    let header = document.createElement("header");
    header.classList.add("header_container");

    let headerTitle = document.createElement("div");
    headerTitle.classList.add("header_title");

    let heading = document.createElement("h1");
    heading.classList.add("title_style");
    heading.textContent = "NEWS BLOG";
    headerTitle.appendChild(heading);

    let subheading = document.createElement("p");
    subheading.classList.add("subtitle_style");
    subheading.textContent = "WORLDWIDE NEWS";
    headerTitle.appendChild(subheading);

    header.appendChild(headerTitle);
    return header;
}

export { getHeader }