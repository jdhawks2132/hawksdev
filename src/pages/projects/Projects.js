import React from 'react';
import ProjectLogo from '../../assets/projects.svg';
import ProjectCard from '../../components/ProjectCard';

//styles
import './Projects.scss';

const projects = [
	{
		id: 1,
		img: 'https://pro2-bar-s3-cdn-cf2.myportfolio.com/f9c81c2c803234fd9cbe7dbdb1c448df/3f407a0e-7ba6-4a46-bbc4-8305445d9693_rw_1920.png?h=8bceaad6a746827877065393f4a0e0d4',
		name: 'BassoonGuru',
		stack: 'ReactJS | Ruby on Rails | Redux',
		desc: 'Learning platform that curates video-based curriculum and student comments.',
		deployed: 'https://bassoonguru.herokuapp.com/',
		git: 'https://github.com/jdhawks2132/bassoonguru',
	},
	{
		id: 2,
		img: 'https://pro2-bar-s3-cdn-cf5.myportfolio.com/f9c81c2c803234fd9cbe7dbdb1c448df/6f4c0377-b379-4099-9598-6df691ef8407_rw_1920.png?h=8aa9eca1d3984f2c17dc1eedd41e2d49',
		name: '//FIS-Assist',
		stack: 'ReactJS | Google Firebase',
		desc: 'Project Management App that allows users to login, ask questions, and communicate via chat.',
		deployed: 'https://hawksnest-c3df1.firebaseapp.com/',
		git: 'https://github.com/jdhawks2132/ProjectManagementApp',
	},
	{
		id: 3,
		img: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/f9c81c2c803234fd9cbe7dbdb1c448df/c0094125-01c7-4bf2-b106-685a45231a05_rw_1920.png?h=35d6f2e346f0c414c671d9e31becf3d6',
		name: 'Escapade',
		stack: 'ReactJS | JavaScript JSON Server',
		desc: 'South American Travel application that offers users adventure-based vacation excursions.',
		deployed: 'https://jdhawks2132.github.io/escapade/',
		git: 'https://github.com/jdhawks2132/escapade',
	},
];

function Projects() {
	const projectList = projects.map((project) => (
		<ProjectCard key={project.id} project={project} />
	));
	return (
		<div id='projects'>
			<div className='projects-section-header'>
				<img src={ProjectLogo} alt='project logo' />
			</div>
			<div className='project-card'>{projectList}</div>
		</div>
	);
}

export default Projects;
