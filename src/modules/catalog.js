import { categoryFilter } from "./filters.js";
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";

const catalog = () => {
  const catalogBtn = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItem = document.querySelectorAll(".catalog li");

  let isOpen = false;

  catalogBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  });

  catalogModalItem.forEach(item => {
    item.addEventListener("click", () => {
      const text = item.textContent;
      getData().then(data => {
        renderGoods(categoryFilter(data, text));
      });
    });
  });
};

export default catalog;
