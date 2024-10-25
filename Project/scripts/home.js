
const events = [
    {
      eventName: "Abidjan Ivory Coast",
      location: "Abidjan",
      dedicated: "2018, November, 8",
      area: 11500,
      imageUrl:
      "https://images.pexels.com/photos/29036777/pexels-photo-29036777/free-photo-of-woman-in-blue-on-track-field-bench.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"  
    },
    {
      eventName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://images.pexels.com/photos/29036777/pexels-photo-29036777/free-photo-of-woman-in-blue-on-track-field-bench.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
      eventName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      eventName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
      eventName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
      eventName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
    },
    {
      eventName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
      eventName: "Accra Ghana",
      location: "Accra",
      dedicated: "2001, November, 16",
      area: 17500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
      eventName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"  
    },
    // Add more temple objects here...
  ];

EventCard();  

function EventCard() {
    temples.forEach(event => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = event.eventName;
        location.innerHTML = `<span class="label">Location</span> ${event.location}`;
        dedication.innerHTML = `<span class="label">Dedicated</span> ${event.dedication}`;
        area.innerHTML = `<span class="label">Size:</span> ${event.area} sp ft`;
        img.setAttribute("src", event.imageUrl);
        img.setAttribute("alt", "${event.eventName} Event");
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}