// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Function to populate product dropdown
function populateProductOptions() {
    const productDropdown = document.getElementById('productName');
    
    productDropdown.innerHTML = '<option value="" disabled selected>Choose a Product ...</option>';
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; 
        option.textContent = product.name;  
        productDropdown.appendChild(option);
    });
}

// Function to handle form submission and track review count in localStorage
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';
    const installDate = document.getElementById('installDate').value;
    const writtenReview = document.getElementById('writtenReview').value;
    const name = document.getElementById('name').value;

    // Get selected features
    let features = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        features.push(checkbox.value);
    });

    // Basic validation
    if (productName && rating && installDate) {
       
        let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        document.getElementById('confirmeMessage').innerText = `Thank you for your review of ${productName}! This is review number ${reviewCount}.`;

        console.log({
            productName,
            rating,
            installDate,
            features,
            writtenReview,
            name
        });
    } else {
        alert("Please complete the required fields: Product Name, Rating, and Date of Installation.");
    }
});

// On page load, populate product dropdown and display review count
window.onload = function() {
    populateProductOptions();
    
    let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
    console.log(`You have completed ${reviewCount} reviews.`);
}


// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
