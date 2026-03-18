const container = document.querySelector(".products");
const categories = ["Smartphones", "Laptops", "Tablets", "Mobile-accessories"];
const container = document.querySelector(".productlist");

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
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += `<span class="star full"></span>`;
    } else if (rating >= i - 0.5) {
      stars += `<span class="star half"></span>`;
    } else {
      stars += `<span class="star empty"></span>`;
    }
  }

  return stars + ` (${rating})`;
}
function showProducts(category, products) {
  let title = category;

  if (category === "laptops") title = "LAPTOPS AND TABLETS";
  if (category === "mens-watches") title = "SMARTWATCHES";
  if (category === "smartphones") title = "SMARTPHONES";

  let html = `<h2>${title}</h2>`;

function showProducts(category, products) {
  document.querySelector(".tekst").textContent = category;
  document.querySelector(".stortudvalg").textContent = `Se det største udvalg af ${category} fra de største brands i verden.`;
  let html = ``;
  html += `<div class="productlist">`;
  products.forEach((product) => {
    html += `
        <article class="product">
       <img src="${product.thumbnail}">
      
 <h4 class=title>${product.title}</h4>
      <p class="rating">
 ${createStarRating(product.rating)}
</p>
       <p class="price">${product.price},-</p>
        <p class=description>${product.description}</p>
        
      <article class="product">
        <img src="${product.thumbnail}" alt="${product.title}">
        <p class="price">${product.price},-</p>
        <p>${product.description}</p>
      </article>
      
    `;
  });
  html += `</div>`;
  container.innerHTML += html;

  container.innerHTML = html;
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
