const date = new Date();
let thisYear = date.getFullYear();

# SKILLS

const skillsList = ["Web Development (HTML/CSS, PHP, JS)", "PC Hardware Installation", "Networks and system administration", "SW/HW Maintenance", "Database design and administration",
"Graphic Design", "Time management", "Team-working", "Microsoft Windows, Office", "Troubleshooting", "Stress resistance"];

const mySkills = document.querySelector("#Skills ul");

for (i = 0; i < skillsList.length; i++) {
    mySkills.appendChild(document.createElement("li")).appendChild(document.createTextNode(skillsList[i]));
}

# FOOTER

const footer = document.createDocumentFragment();
const f_content = footer
.appendChild(document.createElement("footer"))
.appendChild(document.createElement("p"));
f_content.textContent = "Yaroslav Malonos " + thisYear + " . All rights reserved.";

document.body.appendChild(footer);


