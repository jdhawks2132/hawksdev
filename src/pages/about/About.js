import React from 'react';
import AboutLogo from '../../assets/about.svg';

//styles
import './About.scss';

function About() {
	return (
		<div>
			<div className='section-header'>
				<img id='about' src={AboutLogo} alt='about section logo' />
			</div>
			<div className='about-content'>
				<p>
					Full-stack Software Engineer at the Texas School Safety Center with a
					background in education. As a Full-stack Developer, I love the
					creative process behind design and problem solving.
				</p>
				<p>
					I am passionate about helping others learn to code have served as a
					Cohort Team Lead for the Dallas FreeCodeCamp group. Our cohorts work
					on small projects throughout the year to offer growing developers a
					chance to work and learn in a collaborative environment. In addition
					to FCC, I am also a teaching assistant at Washington State University
					in St. Louis' Software Engineering Bootcamp.
				</p>
				<p>
					I am a freelance classical musician (oboe and bassoon) and graphic
					designer. I have designed everything from business cards to costumes
					for individuals and organizations. In my spare time, I enjoy hiking,
					biking, and playing softball.
				</p>
			</div>
		</div>
	);
}

export default About;
