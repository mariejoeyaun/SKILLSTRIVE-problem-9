// Array to store skills
let skills = [];

// DOM Elements
const skillForm = document.getElementById("skillForm");
const skillsContainer = document.getElementById("skillsContainer");

// Add new skill
skillForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const skillName = document.getElementById("skillName").value.trim();
  const targetHours = parseInt(document.getElementById("targetHours").value);

  if (skillName && targetHours > 0) {
    const newSkill = {
      name: skillName,
      target: targetHours,
      logged: 0
    };
    skills.push(newSkill);
    renderSkills();
    skillForm.reset();
  }
});

// Render skill cards
function renderSkills() {
  skillsContainer.innerHTML = "";

  skills.forEach(skill => {
    const percent = ((skill.logged / skill.target) * 100).toFixed(1);
    const remaining = skill.target - skill.logged;

    const card = document.createElement("div");
    card.className = "skill-card";

    card.innerHTML = `
      <h3>${skill.name}</h3>
      <p>${skill.logged}/${skill.target} hours (${percent}%)</p>
      <p>Remaining: ${remaining} hours</p>

      <div class="progress-bar">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>

       <button class="log-btn" data-index="${index}">Log Hours</button>

      <div class="log-form hidden" id="logForm-${index}">
        <input type="number" min="1" placeholder="Hours" class="log-input">
        <button class="submit-log">Add</button>
      </div>

    `;
    skillsContainer.appendChild(card);
  });
}
