# Teknisk dokumentation for Tema 8 gruppeprojekt

Dette projekt er lavet som en del af tema 8. Vi har lavet en dynamisk hjemmeside,
der fokusere på at sælge elektronik produkter som mobil, tablets og laptops.

## Links

- GitHub repository: [https://github.com/Frederikhn97/T8-Site)]
- GitHub Pages: [indsæt link]
- Figma: [https://www.figma.com/design/Lqr8CQJxDCGn5LwHKEYbCK/T8?node-id=0-1&p=f&t=1XHd1aHNv4XJqfbC-0]
- Trello: [https://trello.com/b/S90Vx6qk/gruppe-4-tema-8]

## Projektstruktur:

Projektet er opdelt i HTML, CSS og JavaScript-filer.
Andre ressourser er gemt på Figma

```
Tema8_WEB_II/
├── index.html
├── productlist.html
├── produktdetails.html
├── forms.html
├── global.css
├── index.css
├── produktlist.css
├── produktdetails.css
├── forms_style.css
├── darkmode.js
├── produktlist.js
├── produktdetails.js
├── kunde_service.js
└── README.md
```

### Filbeskrivelser

- **index.html** – forsiden
- **produktlist.html** – viser en liste med data fra API'et
- **produktdetails.html** – viser detaljer om et valgt produkt
- **kunde_service.html** – indeholder formularen til kundeservice
- **style.css** – styrer designet, som for eksempel farver, padding, fonts osv
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

---

## Navngivning:

For at sikre en ensartet struktur og for at undgå forviring vil vi følge disse regler

- **Små bogstaver** - Alle mapper og filer navngives med små bogstaver
- **Ingen mellemrum** - Vi undgår mellemrum i filnavne, da det kan skabe problemer i kodning.
- **Bindestreg** - vi bruger bindestreg til at adskille ord som f.eks. kunde-service.html.

For at gøre det tydeligt hvilke filer der hører sammen bruger vi samme grund navn som for eksempel:

- index.html
- index.js

  Eller

- produktlist.html
- produktlist.js

## Link til scripts:

Vi placerer vores javaScript referencer i <head> i html-dokumentet og bruger defer attributten.

Defer gør, at js-filen først kører når HTML-dokumentet er færdig med at loade. På den måde sikrer vi at HTML elementet er tilgængelig, når JavaScriptet kører.

Et eksempel på dette kunne være:

```
<head>
    <script src="js/index.js defer"></script>
</head>
```

## Git branches:

Vi aftaller hvem arbejder på hvilke sider og pusher kun ting ind i main når vi sidder sammen. Branches bliver navngivet efter hvad der bliver lavet i dem for at skabe et bedre overskud.

## Arbejdsflow:

For at arbejde effektivt i gruppen og undgå konflikter i koden følger vi nogle fælles regler for vores arbejdsproces.

**Fordeling af arbejde**

Vi fordeler arbejdet ved at give hvert gruppemedlem ansvar for bestemte sider eller funktioner på hjemmesiden. På den måde arbejder vi som regel i forskellige filer og undgår, at flere redigerer i de samme filer på samme tid. Hvis to personer skal arbejde på samme funktion, aftaler vi det først i gruppen.

**Commit-beskeder**

For at sikre tydelige commit-beskeder skriver vi korte og præcise beskrivelser af, hvad der er blevet ændret. En commit-besked skal fx forklare hvilken fil eller funktion der er blevet ændret, og hvorfor.  
Eksempel:

- `tilføjet produktliste fra API`
- `rettet fejl i produktdetails.js`
- `opdateret styling på forsiden`

**Kommunikation om ændringer i main**

Når en feature branch bliver merged til **main**, informerer vi resten af gruppen via vores fælles kommunikationskanal som enten er Messenger, Teams eller når vi mødes på skolen. På den måde ved alle, at der er kommet nye ændringer, og de kan opdatere deres lokale version af projektet, før de fortsætter arbejdet.

## Kode:

**Struktur og funktioner**

I vores projekt har vi arbejdet med en struktur, hvor JavaScript og CSS spiller tæt sammen for at skabe et dynamisk og responsivt website. I JavaScript har vi primært skrevet funktioner med `function` keyword, da det giver en tydelig og genkendelig opbygning, især når funktionerne genbruges flere steder i koden, som fx ved visning af produkter. Samtidig har vi brugt arrow functions i kortere callbacks, for eksempel i forbindelse med `fetch` og `forEach`, hvor det gør koden mere kompakt.

**Håndtering af data**

En vigtig del af vores kode er arbejdet med data. Ved hjælp af `fetch` henter vi data fra et API, som derefter bliver håndteret og vist på siden uden at skulle genindlæse den. Dette gør oplevelsen mere flydende for brugeren. Når dataen er hentet, bruger vi DOM-manipulation med `querySelector` og `innerHTML` til dynamisk at indsætte indhold i HTML’en.

**Css selectors**

Vi har valgt at bruge classes som selectors både i HTML og JavaScript. Det giver en fleksibel løsning, hvor flere elementer kan dele samme styling og funktionalitet. Derudover bruges mindre classes som `.price`, `.btn` og `.description` til at style specifikke elementer og skabe en tydelig visuel hierarki.

**Kommentarer i koden**

Kommentarer i koden er brugt der, hvor det passer bedst for eksempel ved fetch-kald, funktioner og mere komplekse dele af CSS som layout eller responsive regler. Vi har valgt at ikke kommentere helt åbenlyse koder, så koden stadig fremstår ren og overskuelig, men samtidig nem at forstå for andre.

Her er et eksempel på hvordan kommentarer i koden hjælper med at skabe overblik ved at forklarer kort hvad koden handler om.
I dette eksempel omkring logoet.

```
/* LOGO */

.logo {
  font-size: 28px;
  font-weight: bold;
  color: white;
}

.logo .elec {
  color: white;
}

.logo .tro {
  color: white;
}
```

# Funktionalitet

Dette afsnit beskriver de vigtigste funktioner, der er udviklet på websitet, samt hvordan brugeren interagerer med siden.

- Hentning af produktdata fra et API baseret på et unikt ID i URL'en.
- Dynamisk visning af produktinformation (titel, pris, billede m.m.) i HTML.
- Præsentation af produktdetaljer såsom kategori, brand, rating og lagerstatus.
- Visning af produktbeskrivelse for at give brugeren mere information.
- Mulighed for brugerinteraktion gennem en “Tilføj til kurv”-knap.

# API endpoints

Dette afsnit viser de endpoints fra API’et, som er brugt i projektet:

- https://dummyjson.com/products/category/smartphones
- https://dummyjson.com/products/category/laptops
- https://dummyjson.com/products/category/tablets
- https://dummyjson.com/products/category/mobile-accessories
- https://dummyjson.com/products/{id} (henter et specifikt produkt baseret på ID)

# Dokumentation af Funktion

## Funktion: showProducts

### Beskrivelse

Funktionen `showProducts` bruges til at vise en liste af produkter på siden. Den modtager data fra API’et og genererer dynamisk HTML, som indsættes i DOM’en. Funktionen arbejder sammen med `fetch`, som henter produktdata, og bliver kaldt for hver kategori.

### Parametre

- `category` (string): Navnet på produktkategorien (fx "smartphones").
- `products` (array): En liste af produktobjekter hentet fra API’et.

### Returnerer

Funktionen returnerer ikke en værdi. Den manipulerer DOM’en ved at indsætte HTML i `.productlist` containeren.

### Eksempel på brug

```
js:

categories.forEach((cat) => {
  fetch(`https://dummyjson.com/products/category/${cat}`)
    .then((res) => res.json())
    .then((data) => showProducts(cat, data.products))
    .catch((err) => console.error(err));
});

function showProducts(category, products) {
  let html = `<h2>${category}</h2>`;

  products.forEach((product) => {
    html += `
      <article class="product">
        <img src="${product.thumbnail}">
        <p class="price">${product.price},-</p>
        <p>${product.description}</p>
      </article>
    `;
  });

  container.innerHTML += html;
}
```
