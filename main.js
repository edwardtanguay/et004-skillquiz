import axios from 'axios';
import './style.scss';

const jobsUrl = 'https://edwardtanguay.vercel.app/share/jobs.json';
const skillsUrl = 'https://edwardtanguay.vercel.app/share/skills.json';

(async () => {
	const jobs = (await axios.get(jobsUrl)).data;
	const skills = (await axios.get(skillsUrl)).data;

	document.querySelector('#app').innerHTML = `
  <div>
  <h1>Webdev Skill Quiz</h1>
  <p>Welcome to this site.</p>
  </div>
`;
})();
