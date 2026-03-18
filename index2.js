const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("id:", id);

const productURL = `https://dummyjson.com/products/categories${id}`;
const productContainer = document.querySelector("#productContainer");

function getProduct() {
  fetch(productURL)
    .then((res) => res.json())
    .then((product) => showProduct(product));
}

function showProduct(product) {
  productContainer.innerHTML = "";

  productContainer.innerHTML = `
  <div class="product-container">
    <img class="product-image"
      src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
      alt="${product.productdisplayname}" />

    <div class="product-description">
      <div class="product-brand">
        <h1 class="product-title">${product.productdisplayname}</h1>
      </div>

      <p class="brand">Brand: ${product.brandname}</p>

      <div class="price">
        <p class="price-value">${product.price} kr.</p>
      </div>

      <p class="stock">${product.soldout === 0 ? "På lager" : "Ikke på lager"}</p>

      <button class="add-to-basket">ADD TO BASKET</button>
    </div>
  </div>
`;
}

getProduct();
