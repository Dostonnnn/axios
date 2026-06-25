const api = `https://jsonplaceholder.typicode.com/posts`;
let products = [];

async function getApi(api) {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Same error occured");
    }
    const data = await response.json();
    products = data;
    showProducts(products);
    console.log(products);
  } catch (error) {
    console.error(error);
    cards.innerHTML = "Error loading data";
  }
}
const cards = document.querySelector(".cards");
const loading = "Loading";
cards.innerHTML = loading;

getApi(api);

function showProducts(result) {
  cards.innerHTML = "";
  let newTitle;
  result.forEach((element) => {
    const { title, userId, body, id } = element;
    if (title.length > 20) {
      newTitle = title.slice(0, 20) + "...";
    }
    cards.innerHTML += `
        <div class="card">
          <h4 class="card-title">${newTitle}</h4>
          <p class="category">${id}</p>
          <p class="description">${body}</p>
        </div>
    `;
  });
}

const search = document.querySelector(".search");
search.addEventListener("input", (e) => {
  e.preventDefault();
  const text = e.target.value.toLowerCase();
  const filterData = products.filter((item) => {
    let titleValue = item.title.toLowerCase().includes(text);
    let idValue = item.id.toString().includes(text);
    return titleValue || idValue;
  });
  console.log(text);
  showProducts(filterData);
});
const body = document.querySelector("body");
const mode = document.querySelector(".dark-mode");
mode.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    mode.textContent = "☀️";
  } else {
    mode.textContent = "🌑";
  }
});
