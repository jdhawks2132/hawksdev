import './App.scss';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Contact from './pages/contact/Contact';
import Skills from './pages/skills/Skills';
import Footer from './components/Footer';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<div className='container'>
				<Home />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
