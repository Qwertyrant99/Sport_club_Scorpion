function header() {
  let headerContent = `
    <div class="header_left">
        <a href="index.html" class="logo">
            <img src="img/scorpion-shape_white.png" alt="logo">
            <div class="logo_text">Scorpion</div>
        </a>
    </div>
    <div class="header_right">
        <nav>
            <a href="index.html" class="link">Główna</a>
            <a href="clubInfo.html" class="link">O klubie</a>
            <a href="activities.html" class="link">Zajęcia</a>
            <a href="timetable.html" class="link">Plan zajęć</a>
            <a href="coaches.html" class="link">Trenerzy</a>
            <a href="prices.html" class="link">Ceny</a>
            <a href="contact.html" class="link">Kontakt</a>
            <a href="shop.html" class="link">Sklep</a>
        </nav>
    </div>
`;

  function setHeader() {
    let header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = headerContent;
    document.body.insertAdjacentElement("afterbegin", header);
  }

  setHeader();
}

export default header;
