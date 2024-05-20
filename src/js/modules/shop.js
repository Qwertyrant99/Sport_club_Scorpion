import { getResource } from "../services/services";

function shop() {
  class ProductCard {
    constructor(src, alt, name, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.name = name;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("product");
      element.innerHTML = `
                <div class="prod_img">
                    <img src=${this.src[0]} alt=${this.alt}>
                    <img src=${this.src[1]} class="img_top" alt=${this.alt}>
                </div>
                <div class="prod_name">${this.name}</div>
                <div class="prod_descr">${this.descr}</div>
                <div class="prod_price">${this.price} zł</div>
            `;
      this.parent.append(element);
    }
  }
  getResource("http://localhost:3000/box_equip").then((data) => {
    data.forEach(({ img, altimg, name, descr, price }) => {
      new ProductCard(
        img,
        altimg,
        name,
        descr,
        price,
        ".box .products_wrapper"
      ).render();
    });
  });

  getResource("http://localhost:3000/kick_equip").then((data) => {
    data.forEach(({ img, altimg, name, descr, price }) => {
      new ProductCard(
        img,
        altimg,
        name,
        descr,
        price,
        ".kick .products_wrapper"
      ).render();
    });
  });

  getResource("http://localhost:3000/tkd_equip").then((data) => {
    data.forEach(({ img, altimg, name, descr, price }) => {
      new ProductCard(
        img,
        altimg,
        name,
        descr,
        price,
        ".tkd .products_wrapper"
      ).render();
    });
  });

  getResource("http://localhost:3000/gym_equip").then((data) => {
    data.forEach(({ img, altimg, name, descr, price }) => {
      new ProductCard(
        img,
        altimg,
        name,
        descr,
        price,
        ".gym .products_wrapper"
      ).render();
    });
  });
}

export default shop;
