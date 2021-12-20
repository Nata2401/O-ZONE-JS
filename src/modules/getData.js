const getData = (str) => {
  return fetch(
    `https://testik-2146c-default-rtdb.firebaseio.com/goods.json?${
      str ? `search=${str}` : ""
    }`
  ).then((response) => {
    return response.json();
  });
};
export default getData;
