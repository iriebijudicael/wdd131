
// Sample data for events
const events = [
  {
    image: "https://images.pexels.com/photos/8624562/pexels-photo-8624562.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Garden Area Roma Eur",
    description: "Near metro, 5.6km from center",
    rating: 4.5,
    buttonText: "See More"
  },
  {
    image: "https://images.pexels.com/photos/8624562/pexels-photo-8624562.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Open Terrace Downtown",
    description: "Central location, great for parties",
    rating: 4.8,
    buttonText: "See More"
  },
  {
    image: "https://images.pexels.com/photos/8624562/pexels-photo-8624562.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Rooftop Skyline",
    description: "Beautiful view of the city skyline",
    rating: 4.7,
    buttonText: "See More"
  }
];

// Function to create event cards and append them to the HTML
function createEventCards() {
  const eventContainer = document.querySelector(".event-list"); // Select the container to hold the event cards

  events.forEach(event => {
    // Create card elements
    const eventCard = document.createElement("section");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const rating = document.createElement("p");
    const button = document.createElement("button");

    // Add content and attributes to elements
    img.src = event.image;
    img.alt = `${event.title} Event`;
    img.loading = "lazy";

    title.textContent = event.title;
    description.textContent = event.description;
    rating.innerHTML = `<span class="label">Rating:</span> ${event.rating} <label for="star5">★★★★★</label>`;
    button.textContent = event.buttonText;

    // Add a class to the card for styling (optional)
    eventCard.classList.add("event-card-item");

    // Append elements to the event card
    eventCard.appendChild(img);
    eventCard.appendChild(title);
    eventCard.appendChild(description);
    eventCard.appendChild(rating);
    eventCard.appendChild(button);

    // Append each event card to the main event container
    eventContainer.appendChild(eventCard);
  });
}
// Call the function to populate the page with event cards
createEventCards();


//---------- Hamburger Menu --------------

function menutoggle() {
  const menulist = document.querySelector('.menulist');
  menulist.classList.toggle('active');
}

// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;








