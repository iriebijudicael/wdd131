const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


const companies = [
  {
    name: "TechCorp",
    industry: "Tech",
    location: "Abidjan",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAnNDSxSRlIOSG1_wskyzYOG-yxnZMRx7Jw&s",
    jobs: 12
  },
  {
    name: "SoftLab",
    industry: "Tech",
    location: "Yamoussoukro",
    logoUrl: "https://play-lh.googleusercontent.com/gck_OgUXLsBaLXX2WNKvZzRVtXL-pXkRjqHPtYzXY5mvyPV3lMjfclvSbKoFrDR7n0nAze4Qz7ZypoUPv1G5=w600-h300-pc0xffffff-pd",
    jobs: 7
  },
  {
    name: "Designify",
    industry: "Design",
    location: "Remote",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMtAJ_n_MYhBzKgkF2WuP2J72omjg_S_ViR5uaehltw&s",
    jobs: 5
  },
  {
    name: "MarketFlow",
    industry: "Marketing",
    location: "Bouaké",
    logoUrl: "https://play-lh.googleusercontent.com/v2NbltLxGOcOjY3OOr7hWh2htq7Q08GFQYDNAu_aYK4XvCIRUzFzy_IMOiVJcIcsgQ",
    jobs: 16
  },
  {
    name: "Global Enterprises",
    industry: "Business",
    location: "Chicago, IL",
    logoUrl: "https://media.licdn.com/dms/image/sync/v2/D4E27AQFf7WXTR9vvUw/articleshare-shrink_800/B4EZrakTceGUAI-/0/1764603541654?e=2147483647&v=beta&t=nSEmSwySuai12scXpDo64CcfZvzR8G8INoK8ssSg_HA",
    jobs: 9
    },
    {
    name: "DataWorks Inc.",
    industry: "Data Science",
    location: "Seattle, WA",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLckaUVqZxfY6Iu5vr4HHE18aKX--X_1zXAQ&s",
    jobs: 11
    },
    {
    name: "InfraTech Solutions",
    industry: "DevOps",
    location: "Denver, CO",
    logoUrl: "https://www.infra-tech.be/wp-content/uploads/INFRATECH_logo2021_couleurs_327x140.png",
    jobs: 4
    },
    {
    name: "InnovateX",
    industry: "Product Management",
    location: "Boston, MA",
    logoUrl: "https://file.aiquickdraw.com/imgcompressed/img/compressed_7fdd2f9d001906e3a2e04721c27a0bbd.webp",
    jobs: 8
    },
    {
    name: "Google Tech",
    industry: "Tech",
    location: "Mountain View, CA",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqhrpyiPo_hqQ42khSzMSiKfyZiFEtA1UIw&s",
    jobs: 20
    },
];

const grid = document.getElementById("companyGrid");

function renderCompanies(list) {
  grid.innerHTML = "";

  list.forEach(c => {
    const card = document.createElement("div");
    card.classList.add("company-card");

    card.innerHTML = `
      <img src="${c.logoUrl}" class="company-logo" alt="logo">
      <h3>${c.name}</h3>
      <p>${c.industry} — ${c.location}</p>
      <button class="view-jobs-btn">View ${c.jobs} Jobs</button>
    `;

    grid.appendChild(card);
  });
}

renderCompanies(companies);

// SEARCH & FILTER LOGIC
document.getElementById("searchBtn").addEventListener("click", () => {
  const name = document.getElementById("searchCompany").value.toLowerCase();
  const industry = document.getElementById("filterIndustry").value;
  const location = document.getElementById("filterLocation").value;

  const filtered = companies.filter(c =>
    (c.name.toLowerCase().includes(name)) &&
    (industry === "" || c.industry === industry) &&
    (location === "" || c.location === location)
  );

  renderCompanies(filtered);
});

function animateStats() {
  const stats = document.querySelectorAll(".stat-number");

  stats.forEach(stat => {
    const target = +stat.getAttribute("data-target");
    let count = 0;
    const speed = target / 200; // Animation speed

    const updateCount = () => {
      if (count < target) {
        count += speed;
        stat.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target.toLocaleString();
      }
    };

    updateCount();
  });
}

// Trigger animation when section is visible
document.addEventListener("DOMContentLoaded", animateStats);

