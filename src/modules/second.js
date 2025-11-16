import getData from "./getData.js";

const second = () => {
  const cartBtn = document.getElementById("cart");

  getData().then(data => {
    console.log(data);
  });
};

export default second;
