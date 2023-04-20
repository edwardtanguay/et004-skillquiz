import axios from 'axios';
import './style.scss';

const config = {
	numberOfQuestions: 5
};

const jobsUrl = 'https://edwardtanguay.vercel.app/share/jobs.json';
const skillsUrl = 'https://edwardtanguay.vercel.app/share/skills.json';

const displaySkill = (skill) => {
	let html = '';
	html += `
<div class="skill">
    <div class="name">${skill.name}</div>
    <div class="description">${skill.description}</div>
</div>
`;
	return html;
};

(async () => {
	const jobs = (await axios.get(jobsUrl)).data;
	const skills = (await axios.get(skillsUrl)).data;

	const getQuizSkills = () => {
		const randomSkills = [];
		for (let i = 0; i < config.numberOfQuestions; i++) {
			const randomIndex = Math.floor(Math.random() * skills.length);
			randomSkills.push(skills[randomIndex]);
		}
		return randomSkills;
	};

	const displayQuizHtml = () => {
		let html = '<div class="quizArea">';
		for (const skill of getQuizSkills()) {
			html += displaySkill(skill);
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
