const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}))

// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;



const temples = [
    {
      templeName: "Abidjan Ivory Coast",
      location: "Abidjan",
      dedicated: "2025, May, 25",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"  
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra",
      dedicated: "2001, November, 16",
      area: 17500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"  
    },
    // Add more temple objects here...
  ];

createTempleCard(temples);  


// Load everything on start
displayTemples(temples);
// const filtered = document.querySelector("#nav-link");
// filtered.addEventListener("click", () => {
//   createTempleCard(temples.filter(t => t.dedicated < 1900))
// });
function createTempleCard() {
    document.querySelector(".temple-card").innerHTML = "";
    temples.forEach(temple => {
      const card = document.createElement("section");
      const name = document.createElement("h3");
      const location = document.createElement("p");
      const dedication = document.createElement("p");
      const area = document.createElement("p");
      const img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sp ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", "${temple.templeName} Temple");
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".temple-card").appendChild(card);
    });
}


// --------------------
// Filters
// --------------------
function applyFilter(type) {
  let filtered;

  switch(type) {
    case "old":
      filtered = temples.filter(t => t.dedicated < 1900);
      title.textContent = "Old Temples (Before 1900)";
      break;

    case "new":
      filtered = temples.filter(t => t.dedicated > 2000);
      title.textContent = "New Temples (After 2000)";
      break;

    case "large":
      filtered = temples.filter(t => t.area > 90000);
      title.textContent = "Large Temples (> 90,000 sq ft)";
      break;

    case "small":
      filtered = temples.filter(t => t.area < 10000);
      title.textContent = "Small Temples (< 10,000 sq ft)";
      break;

    default:
      filtered = temples;
      title.textContent = "Home";
      break;
  }

  displayTemples(filtered);
}

