// --- MOBILE MENU ---
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


// --- LAZY LOAD IMAGES USING INTERSECTION OBSERVER ---
const lazyImages = document.querySelectorAll("img.lazy");

const imageObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;   // Load real image
      img.classList.add("lazy-loaded");
      obs.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));



// --- TRENDING JOBS DATA ---
const trendingJobs = [
  { 
    title: "Frontend Developer", 
    company: "TechCorp", 
    location: "Abidjan", 
    description: "Build responsive and accessible web interfaces using HTML, CSS, and JavaScript."
  },
  { 
    title: "UX/UI Designer", 
    company: "Designify", 
    location: "Remote",
    description: "Create user-centered designs for web and mobile platforms."
  },
  { 
    title: "Backend Engineer", 
    company: "SoftLab", 
    location: "Yamoussoukro",
    description: "Design and build scalable APIs with Node.js."
  }
];

const trendingContainer = document.getElementById("homeTrendingJobs");


// --- LOAD TRENDING JOBS ---
function loadTrendingJobs() {
  trendingJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} — ${job.location}</p>
      <p>${job.description}</p>
      <button>Apply Now</button>
    `;

    trendingContainer.appendChild(card);

    // Animate card
    setTimeout(() => card.classList.add("loaded"), 100);
  });
}


// --- LAZY LOAD TRENDING JOBS WHEN VISIBLE ---
const trendingObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadTrendingJobs();
      obs.unobserve(entry.target);
    }
  });
});

trendingObserver.observe(trendingContainer);



// ------------------------------
// POST JOB DIALOG LOGIC
// ------------------------------

// Elements
const postJobDialog = document.getElementById("postJobDialog");
const postJobForm = document.getElementById("postJobForm");
const openPostJobBtn = document.querySelector("#postJob"); 
const closeDialogBtn = document.querySelector("#postJobDialog .close-button");

// Open dialog
openPostJobBtn.addEventListener("click", () => {
  postJobDialog.showModal();
});

// Close dialog (❌ button)
closeDialogBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form reset
  postJobDialog.close();
});

// Handle form submission
postJobForm.addEventListener("submit", (e) => {
  // Only validate form fields – NOT the close button
  if (!postJobForm.reportValidity()) {
    e.preventDefault();
    return;
  }

  // If valid, allow normal GET action to "review.html"
});


// ------------------------------
const jobList = document.getElementById("jobList");

// Get stored jobs
const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

function displayJobs() {
  if (savedJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs posted yet.</p>";
    return;
  }

  savedJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} — ${job.location}</p>
      <p>Type: ${job.type}</p>
      <button>Apply Now</button>
    `;

    jobList.appendChild(card);
  });
}

displayJobs();
