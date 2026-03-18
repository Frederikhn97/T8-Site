const container = document.querySelector(".productlist");
const pageTitle = document.querySelector(".page-title");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if (!category) {
  pageTitle.textContent = "Produkter";
  container.innerHTML = "<p>Ingen kategori valgt.</p>";
} else {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => showProducts(category, data.products))
    .catch((err) => {
      console.error(err);
      pageTitle.textContent = "Produkter";
      container.innerHTML = "<p>Kunne ikke hente produkter.</p>";
    });
}

function showProducts(category, products) {
  let title = category;

  if (category === "laptops") title = "LAPTOPS OG TABLETS";
  if (category === "mens-watches") title = "SMARTWATCHES";
  if (category === "smartphones") title = "SMARTPHONES";

  pageTitle.textContent = title;

  const html = products
    .map((product) => {
      return `
  <article class="product">
    <div class="product-image">
      <img src="${product.thumbnail}" alt="${product.title}">
    </div>

    <div class="product-content">
      <h2 class="product-title">${product.title}</h2>
      <p class="price">${formatPrice(product.price)}</p>
      <p class="product-desc">${product.description.substring(0, 95)}...</p>

      <div class="product-bottom">
        <a href="product.html?id=${product.id}" class="read-more">
          Læs mere
        </a>

        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-number">5</span>
          <span class="rating-count">(105)</span>
        </div>
      </div>
    </div>
  </article>
`;
    })
    .join("");

  container.innerHTML = html;
}

function formatPrice(price) {
  return `${price.toLocaleString("da-DK")},-`;
}

// const container = document.querySelector(".productlist");
// const categories = ["smartphones", "laptops", "tablets", "mobile-accessories"];

// categories.forEach((cat) => {
//   fetch(`https://dummyjson.com/products/category/${cat}`)
//     .then((res) => res.json())
//     .then((data) => showProducts(cat, data.products))
//     .catch((err) => console.error(err));
// });

// function showProducts(category, products) {
//   let html = `<h2>${category}</h2>`; // valgfrit: titel for kategorien

//   products.forEach((product) => {
//     html += `
//       <article class="product">
//         <img src="${product.thumbnail}">
//         <p class="price">${product.price},-</p>
//         <p>${product.description}</p>
//       </article>
//     `;
//   });

//   container.innerHTML += html; // += så alle kategorier vises
// }
