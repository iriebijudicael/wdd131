const companies = [
  {
    name: "TechCorp",
    industry: "Tech",
    location: "Abidjan",
    logo: "logos/company1.png",
    jobs: 12
  },
  {
    name: "SoftLab",
    industry: "Tech",
    location: "Yamoussoukro",
    logo: "logos/company2.png",
    jobs: 7
  },
  {
    name: "Designify",
    industry: "Design",
    location: "Remote",
    logo: "logos/company3.png",
    jobs: 5
  },
  {
    name: "MarketFlow",
    industry: "Marketing",
    location: "Bouaké",
    logo: "logos/company4.png",
    jobs: 16
  },
  {
    name: "Global Enterprises",
    industry: "Business",
    location: "Chicago, IL",
    logo: "logos/company5.png",
    jobs: 9
    },
    {
    name: "DataWorks Inc.",
    industry: "Data Science",
    location: "Seattle, WA",
    logo: "logos/company6.png",
    jobs: 11
    },
    {
    name: "InfraTech Solutions",
    industry: "DevOps",
    location: "Denver, CO",
    logo: "logos/company7.png",
    jobs: 4
    },
    {
    name: "InnovateX",
    industry: "Product Management",
    location: "Boston, MA",
    logo: "logos/company8.png",
    jobs: 8
    },
    {
    name: "Google Tech",
    industry: "Tech",
    location: "Mountain View, CA",
    logo: "logos/company9.png",
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
      <img src="${c.logo}" class="company-logo" alt="logo">
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
