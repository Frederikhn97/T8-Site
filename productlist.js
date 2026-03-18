const container = document.querySelector(".products");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

console.log("category:", category);

if (!category) {
  container.innerHTML = "<p>Ingen kategori valgt.</p>";
} else {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => showProducts(category, data.products))
    .catch((err) => {
      console.error(err);
      container.innerHTML = "<p>Kunne ikke hente produkter.</p>";
    });
}

function createStarRating(rating) {
  const rounded = Math.round(rating);
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars += `<span class="star filled">★</span>`;
    } else {
      stars += `<span class="star empty">★</span>`;
    }
  }

  return `
    <div class="rating-wrap">
      <span class="stars">${stars}</span>
      <span class="rating-value">${rating.toFixed(1)}</span>
    </div>
  `;
}

function showProducts(category, products) {
  let displayCategory = category;

  if (category === "laptops") displayCategory = "Laptops og tablets";
  if (category === "mens-watches") displayCategory = "Smartwatches";
  if (category === "smartphones") displayCategory = "Smartphones";

  document.querySelector(".tekst").textContent = displayCategory;
  document.querySelector(".stortudvalg").textContent = `Se det største udvalg af ${displayCategory} fra de største brands i verden.`;

  let html = `<div class="productlist">`;

  products.forEach((product) => {
    html += `
      <article class="product">
        <div class="product-image">
          <img src="${product.thumbnail}" alt="${product.title}">
        </div>

        <div class="product-info">
          <h4 class="title">${product.title}</h4>
          <p class="price">${product.price.toLocaleString("da-DK")},-</p>
          <p class="description">${product.description}</p>

          <div class="product-bottom">
            <a href="#" class="read-more">Læs mere</a>
            ${createStarRating(product.rating)}
          </div>
        </div>
      </article>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}
