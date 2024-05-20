import header from "./modules/header";
import footer from "./modules/footer";
import slider from "./modules/slider";
import coaches from "./modules/coaches";
import shop from "./modules/shop";

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

window.addEventListener("DOMContentLoaded", () => {
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

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

  const modalTimerId = setTimeout(openModal, 50000);

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

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/spinner.svg",
    success: "Dziękujemy! Wkrótce skontaktujemy się z Tobą",
    failure: "Coś poszło nie tak...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;
          `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">
          <div class="modal__close" data-close>×</div>
          <div class="modal__title">${message}</div>
      </div>
  `;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }

  header();
  footer();
  slider();
  coaches();
  shop();

  fetch("db.json")
    .then((data) => data.json())
    .then((res) => console.log(res));
});
