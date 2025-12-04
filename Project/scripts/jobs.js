const trendingContainer = document.getElementById("homeTrendingJobs");

// trending mock data
const trendingJobs = [
  { title: "Frontend Developer", company: "TechCorp", location: "Abidjan" },
  { title: "UX/UI Designer", company: "Designify", location: "Remote" },
  { title: "Backend Engineer", company: "SoftLab", location: "Yamoussoukro" }
];

function loadTrendingJobs() {
  trendingJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} — ${job.location}</p>
      <button>Apply Now</button>
    `;

    trendingContainer.appendChild(card);
  });
}

loadTrendingJobs();
