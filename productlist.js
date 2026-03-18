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

function showProducts(category, products) {
  let title = category;

  if (category === "laptops") title = "LAPTOPS AND TABLETS";
  if (category === "mens-watches") title = "SMARTWATCHES";
  if (category === "smartphones") title = "SMARTPHONES";

  let html = `<h2>${title}</h2>`;

  products.forEach((product) => {
    html += `
      <article class="product">
        <img src="${product.thumbnail}" alt="${product.title}">
        <p class="price">${product.price},-</p>
        <p>${product.description}</p>
      </article>
    `;
  });

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
