import { getResource } from "../services/services";

function coaches() {
  class CoachCard {
    constructor(src, alt, name, descr, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.name = name;
      this.descr = descr;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("coach");
      element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <div class="coach_name">${this.name}</div>
            <div class="coach_descr">
                <ul>
                    <li>${this.descr[0]}</li>
                    <li>${this.descr[1]}</li>
                    <li>${this.descr[2]}</li>
                </ul>
            </div>
        `;
      this.parent.append(element);
    }
  }

  getResource("http://localhost:3000/taekwondo_coaches").then((data) => {
    data.forEach(({ img, altimg, name, descr }) => {
      new CoachCard(img, altimg, name, descr, ".coaches_list .tkd").render();
    });
  });

  getResource("http://localhost:3000/boxing_coaches").then((data) => {
    data.forEach(({ img, altimg, name, descr }) => {
      new CoachCard(img, altimg, name, descr, ".coaches_list .box").render();
    });
  });

  getResource("http://localhost:3000/kickboxing_coaches").then((data) => {
    data.forEach(({ img, altimg, name, descr }) => {
      new CoachCard(img, altimg, name, descr, ".coaches_list .kick").render();
    });
  });

  getResource("http://localhost:3000/gym_coaches").then((data) => {
    data.forEach(({ img, altimg, name, descr }) => {
      new CoachCard(img, altimg, name, descr, ".coaches_list .gym").render();
    });
  });
}

export default coaches;
