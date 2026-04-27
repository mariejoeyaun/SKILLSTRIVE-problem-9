let skills = [];

const skillForm = document.getElementById("skillForm");
const logForm = document.getElementById("logForm");
const logSkillSelect = document.getElementById("logSkill");
const skillsContainer = document.getElementById("skillsContainer");

skillForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const skillName = document.getElementById("skillName").value.trim();
    const targetHours = parseInt(document.getElementById("targetHours").value);
}

  if (skillName && targetHours > 0) {
    const newSkill = {
      name: skillName,
      target: targetHours,
      logged: 0
    };
    skills.push(newSkill);
    updateSkillOptions();
    renderSkills();
    skillForm.reset();
  }
});

logForm.addEventListener("submit", function(e) {
   e.preventDefault();
   const selectedSkill = logSkillSelect.value;
   const hours = parseInt(document.getElementById("logHours").value);

    if (selectedSkill && hours > 0) {
    const skill = skills.find(s => s.name === selectedSkill);
    skill.logged += hours;
    renderSkills();
    logForm.reset();
  }
});

function updateSkillOptions() {
  
}

