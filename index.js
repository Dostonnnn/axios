const api = `https://dummyjson.com/products`;
const getApi = async (url) => {
  try {
    const response = await axios.get(url).then((result) => {
      console.log(result.data);
      showProducts(result.data.products);
    });
  } catch (error) {
    console.log(error);
  }
};

getApi(api);
const cards = document.querySelector(".cards");
const loading = "Loading";
cards.innerHTML = loading;
function showProducts(result) {
  cards.innerHTML = "";
  result.forEach((element) => {
    const { title, category, description, price } = element;
    console.log();
    cards.innerHTML += `
        <div class="card">
          <div class="image-box">
            <img src="${element.images}" alt="${title}" class="image" />
          </div>
          <h4 class="card-title">${title}</h4>
          <p class="category">${category}</p>
          <p class="description">${description}</p>
          <p class="price">${price}</p>
        </div>
    `;
  });
}
