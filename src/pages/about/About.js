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
					background in education and design. As a Full-stack Developer, I love
					the creative process behind design and problem solving.
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
