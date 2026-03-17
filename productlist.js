const container = document.querySelector(".productlist");
const categories = ["smartphones", "laptops", "tablets", "mobile-accessories"];

categories.forEach((cat) => {
  fetch(`https://dummyjson.com/products/category/${cat}`)
    .then((res) => res.json())
    .then((data) => showProducts(cat, data.products))
    .catch((err) => console.error(err));
});

function showProducts(category, products) {
  let html = `<h2>${category}</h2>`; // valgfrit: titel for kategorien

  products.forEach((product) => {
    html += `
      <article class="product">
        <img src="${product.thumbnail}">
       
        <p class="price">${product.price},-</p>
        <p>${product.description}</p>
      </article>
    `;
  });

  container.innerHTML += html; // += så alle kategorier vises
}
