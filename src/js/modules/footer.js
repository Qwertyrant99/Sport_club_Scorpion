function footer() {
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
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = footerContent;
    document.body.insertAdjacentElement("beforeend", footer);
  }

  setFooter();
}

export default footer;
