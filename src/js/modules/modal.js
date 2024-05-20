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
  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = modalContent;
  document.body.insertAdjacentElement("beforeend", modal);
}
setModal();

function modal() {
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal());
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}
const modalTimerId = setTimeout(openModal, 50000);
function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

export default modal;
export { closeModal };
export { openModal };
