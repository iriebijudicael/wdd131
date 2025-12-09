const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


const jobsContainer = document.getElementById("jobsContainer");
const loader = document.getElementById("loader");
const form = document.getElementById("searchForm");

// Mock job data (can be replaced with API)
let jobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Abidjan, CI",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    company: "Designify",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "Backend Developer",
    company: "SoftLab",
    location: "Yamoussoukro, CI",
    type: "Full-time",
  },
  {
    title: "Marketing Specialist",
    company: "MarketFlow",
    location: "Bouaké, CI",
    type: "Part-time",
  },
  {
    title: "Business Administration",
    company: "Global Enterprises",
    location: "Chicago, IL",
    type: "Full-Time",
  },
  {
    title: "Data Scientist",
    company: "DataWorks Inc.",
    location: "Seattle, WA",
    type: "Full-Time",
  },
  {
    title: "DevOps Engineer",
    company: "InfraTech Solutions",
    location: "Denver, CO",
    type: "Path-Time",
  },
  {
    title: "Product Manager",
    company: "InnovateX",
    location: "Boston, MA",
    type: "Internship",
  },
];

// Load jobs with delay (simulate API)
function loadJobs(list) {
  loader.style.display = "flex";
  jobsContainer.innerHTML = "";

  setTimeout(() => {
    loader.style.display = "none";

    list.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";

      card.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.company} — ${job.location}</p>
        <p><strong>${job.type}</strong></p>
        <button class="apply-btn">Apply Now</button>
      `;

      jobsContainer.appendChild(card);
    });

  }, 1200);
}

// Search feature
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("titleInput").value.toLowerCase();
  const location = document.getElementById("locationInput").value.toLowerCase();

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(title) &&
    j.location.toLowerCase().includes(location)
  );

  loadJobs(filtered);
});

// Initial load
loadJobs(jobs);


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



