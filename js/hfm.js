window.addEventListener('DOMContentLoaded', () => {
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
        let header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = headerContent;
        document.body.insertAdjacentElement('afterbegin', header);
    }

    setHeader();

    let footerContent = `
    <div class="social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-twitter"></a>
    </div>
    <div class="contact">
        <a href="tel:+48736408056" class="link">+48 736 408 056</a>
        <a href="mailto:info@scorpion.pl" class="link">info@scorpion.pl</a>
        <div class="address">Ludna 9, Warszawa</div>
    </div>
`;

    function setFooter() {
        let footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.innerHTML = footerContent;
        document.body.insertAdjacentElement('beforeend', footer);
    }

    setFooter();

    let modalContent = `
    <div class="modal_dialog">
        <div class="modal_content">
            <form action="#">
                <div data-close class="modal_close">&times;</div>
                <div class="modal_title">Wyślemy Ci dokładne informacje jak najszybciej!</div>
                <input required placeholder="Twoje imię" name="name" type="text" class="modal_input">
                <input required placeholder="Twój numer telefonu" name="phone" type="phone" class="modal_input">
                <input required placeholder="Twój email" name="email" type="email" class="modal_input">
                <select required placeholder="Wybierz trening" name="sport" type="text" class="modal_input">
                    <option value="taekwondo">Taekwondo</option>
                    <option value="boxing">Boks</option>
                    <option value="kickboxing">Kickboxing</option>
                    <option value="gym">Siłownia</option>
                </select>
                <button class="btn btn_dark btn_min">Zapisać się na trening</button>
            </form>
        </div>
    </div>
`;

    function setModal() {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = modalContent;
        document.body.insertAdjacentElement('beforeend', modal);
    }

    setModal();
});