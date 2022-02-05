import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

//styles
import './Navbar.scss';

function Navbar() {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<nav className='navbar'>
			<div className='logo'>
				<img onClick={handleClick} src={Logo} alt='logo' />
			</div>

			<div className='right-side'>
				<button className='btn' id='toggle' onClick={() => setShow(!show)}>
					{show ? <CloseIcon /> : <MenuIcon />}
				</button>
				<ul className='links' id={show ? 'hidden' : ''}>
					<li className='logo'></li>
					<li>
						<Link to='about' smooth={true} duration={1000}>
							<span>01.</span>About
						</Link>
					</li>
					<li>
						<Link to='projects' smooth={true} duration={1000}>
							<span>02.</span>Projects
						</Link>
					</li>
					<li>
						<Link to='skills' smooth={true} duration={1000}>
							<span>03.</span>Skills
						</Link>
					</li>
					<li>
						<Link to='connect' smooth={true} duration={1000}>
							<span>04.</span>Connect
						</Link>
					</li>
					<li>
						<a
							href='https://medium.com/@jdhawks'
							target='_blank'
							rel='noreferrer noopener'
						>
							<span>05.</span>Blog
						</a>
					</li>
					<li>
						<a
							href='https://drive.google.com/file/d/1jbeHE5qYxWmL1CXbRIayN6GthQoK3pv-/view?usp=sharing'
							target='_blank'
							rel='noreferrer noopener'
						>
							<button className='btn'>Resume</button>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
