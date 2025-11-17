import { seacrhFilter } from "./filters.js";
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");

  searchInput.addEventListener("input", event => {
    event.preventDefault();
    const value = event.target.value;

    getData().then(data => {
      renderGoods(seacrhFilter(data, value));
    });
  });
};

export default search;
