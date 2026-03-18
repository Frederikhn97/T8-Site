const container = document.querySelector(".products");
const categories = ["Smartphones", "Laptops", "Tablets", "Mobile-accessories"];

categories.forEach((cat) => {
  fetch(`https://dummyjson.com/products/category/${cat}`)
    .then((res) => res.json())
    .then((data) => showProducts(cat, data.products))
    .catch((err) => console.error(err));
});

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
        
      </article>
      
    `;
  });
  html += `</div>`;
  container.innerHTML += html;
}
