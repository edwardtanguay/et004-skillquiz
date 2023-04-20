import axios from 'axios';
import './style.scss';

const jobsUrl = 'https://edwardtanguay.vercel.app/share/jobs.json';
const skillsUrl = 'https://edwardtanguay.vercel.app/share/skills.json';

(async () => {
	const jobs = (await axios.get(jobsUrl)).data;
	const skills = (await axios.get(skillsUrl)).data;

  const displayQuizHtml = () => {
    let html = '<div class="quizArea">';
    for (const skill of skills) {
        html += `
<div class="skill">
    <div class="name">${skill.name}</div>
    <div class="description">${skill.description}</div>
</div>
`;
    }
html += '</div>';
    return html;
};

	document.querySelector('#app').innerHTML = `
  <div>
  <h1>Webdev Skill Quiz</h1>
  ${displayQuizHtml()}
  </div>
`;
})();