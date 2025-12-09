// Parse GET parameters
const params = new URLSearchParams(window.location.search);

const job = {
  title: params.get("jobTitle"),
  company: params.get("jobCompany"),
  location: params.get("jobLocation"),
  type: params.get("jobType")
};

// Fill review display
const box = document.getElementById("reviewJobBox");
box.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} — ${job.location}</p>
      <p>${job.description}</p>
    `;

// EDIT BUTTON — go back to companies page
document.getElementById("editBtn").addEventListener("click", () => {
  window.history.back();
});

// CONFIRM — save to localStorage then go to jobs.html
document.getElementById("confirmBtn").addEventListener("click", () => {
  const stored = JSON.parse(localStorage.getItem("jobs")) || [];
  stored.push(job);

  localStorage.setItem("jobs", JSON.stringify(stored));

  window.location.href = "jobs.html";
});
