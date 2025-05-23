const date = new Date();
let thisYear = date.getFullYear();

/* SKILLS */

const skillsList = ["Web Development (HTML/CSS, PHP, JS)", "PC Hardware Installation", "Networks and system administration", "SW/HW Maintenance", "Database design and administration",
"Graphic Design", "Time management", "Team-working", "Microsoft Windows, Office", "Troubleshooting", "Stress resistance"];

const mySkills = document.querySelector("#Skills ul");

for (i = 0; i < skillsList.length; i++) {
    mySkills.appendChild(document.createElement("li")).appendChild(document.createTextNode(skillsList[i]));
}

/* FOOTER */

const footer = document.createDocumentFragment();
const f_content = footer
.appendChild(document.createElement("footer"))
.appendChild(document.createElement("p"));
f_content.textContent = "Yaroslav Malonos \xA9 " + thisYear + ". All rights reserved.";

document.body.appendChild(footer);

const msgSection = document.getElementById("allMessages");

/* MESSAGES */

function messageSubmit(event) {
    const name = event.target.elements.usersName.value;
    const email = event.target.elements.usersEmail.value;
    const text = event.target.elements.usersMessage.value;
    console.log(`The user ${name} (email: E-Mail: ${email}) left a message: ${text}.`);
    event.preventDefault();
    messageForm.reset();

    const messageSection = document.getElementById("messageList");
    const newMessage = messageList.innerHTML += `<li><a href="mailto:${email}">${name}</a><span> - ${text}</span></li>`;
    if (msgSection.getElementsByTagName("li").length > 0) {
        msgSection.style.display = 'block';
    }

      const lastElement = messageSection.lastElementChild;
      const childNumber = messageSection.childElementCount;
      const removeButton = lastElement.appendChild(document.createElement('button'));
      removeButton.innerText = 'Remove';
      removeButton.setAttribute("type", "button");
      removeButton.id = childNumber;
  };

function messageRemove(event) {
    const clickedRemoveBtnId = event.target.id;
    console.log("Clicked button ID is " + clickedRemoveBtnId);
    document.getElementById(clickedRemoveBtnId).parentNode.remove();
    if (msgSection.getElementsByTagName("li").length == 0) {
        msgSection.style.display = 'none';
    }
  };

const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", messageSubmit);

const messagesList = document.querySelector('[id="allMessages"]');
messagesList.addEventListener("click", messageRemove);

// Fetch projects from GitHub

const projectSection = document.getElementById("Projects");
const projectList = projectSection.querySelector('ul');

fetch('https://api.github.com/users/midnight1502/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    const myRepos = data;
    for (i = 0; i < myRepos.length; i++) {
      projectList.appendChild(document.createElement('li'))
      .appendChild(document.createElement('a'));
      projectList.lastElementChild.lastElementChild.setAttribute('href', 'https://github.com/midnight1502/' + myRepos[i].name);
      projectList.lastElementChild.lastElementChild.setAttribute('target', '_blank');
      projectList.lastElementChild.lastElementChild.textContent = myRepos[i].name;
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });


