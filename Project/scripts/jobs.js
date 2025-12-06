const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


const trendingContainer = document.getElementById("homeTrendingJobs");

// trending mock data
const trendingJobs = [
  { 
    title: "Frontend Developer", 
    company: "TechCorp", 
    location: "Abidjan", 
    description: "Build responsive and accessible web interfaces using HTML, CSS, and JavaScript. Collaborate with designers and backend developers to improve UI/UX performance."
  },
  { 
    title: "UX/UI Designer", 
    company: "Designify", 
    location: "Remote",
    description: "Create user-centered designs for web and mobile platforms. Work closely with developers to implement modern UI trends."
  },
  { title: "Backend Engineer", 
    company: "SoftLab", 
    location: "Yamoussoukro",
    description: "Design and build scalable APIs with Node.js. Optimize performance, ensure data security, and collaborate with cross-functional teams."
  }
];

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
  });
}

loadTrendingJobs();

