const card = document.querySelector(".card");
const id = new URLSearchParams(window.location.search).get("id");

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    show(product);
  });

function show(product) {
  card.innerHTML = `
    
    <div class="image">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h1>${product.title}</h1>
        <p class="price">${product.price},-</p>
    </div>

    <div class="details">
        <h2>PRODUKT DETALJER</h2>
        <ul>
            <li>Kategori: ${product.category}</li>
            <li>Brand: ${product.brand}</li>
            <li>Rating: ${product.rating}</li>
            <li>Stock: ${product.stock}</li>
        </ul>
    </div>

    <div class="description">
        <h2>About product</h2>
        <p>${product.description}</p>
        <button class="btn">Tilføj til kurv</button>
    </div>

  `;
}
