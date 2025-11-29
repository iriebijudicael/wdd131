// Product Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product select
function populateProductOptions() {
    const productDropdown = document.getElementById("productName");
    productDropdown.innerHTML = '<option value="" disabled selected>Choose a Product ...</option>';

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productDropdown.appendChild(option);
    });
}

populateProductOptions();


// ----------------------------------------------------------
// VALIDATION FOR EACH REQUIRED INPUT
// ----------------------------------------------------------
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    
    let errors = [];

    const productName = document.getElementById("productName");
    const installDate = document.getElementById("installDate");
    const name = document.getElementById("name");
    const rating = document.querySelector("input[name='rating']:checked");

    // Validate product selection
    if (!productName.value) {
        errors.push("Please select a product.");
    }

    // Validate rating
    if (!rating) {
        errors.push("Please select an overall rating.");
    }

    // Validate date
    if (!installDate.value) {
        errors.push("Please choose an installation date.");
    }
    if (!name.value) {
        errors.push("Please your name!");
    }

    // If errors exist, prevent submit
    if (errors.length > 0) {
        event.preventDefault();
        displayErrors(errors);
    }
});

// ----------------------------------------------------------
// DISPLAY ERROR MESSAGES
// ----------------------------------------------------------
function displayErrors(errorList) {
    let box = document.getElementById("confirmeMessage");

    box.style.color = "#b30000";
    box.style.borderLeft = "5px solid #b30000";
    box.style.background = "#ffe6e6";

    box.innerHTML = `
        <strong>Please fix the following:</strong>
        <ul>
            ${errorList.map(err => `<li>${err}</li>`).join("")}
        </ul>
    `;
}

// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
