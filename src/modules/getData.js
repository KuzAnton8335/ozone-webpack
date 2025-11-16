const getData = () => {
  return fetch(
    "https://ozone-57d18-default-rtdb.firebaseio.com/goods.json"
  ).then(response => {
    return response.json();
  });
};

export default getData;
