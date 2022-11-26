import Header from '../src/components/Header/Header';
import Hero from './components/Hero/Hero';
import TokenBar from './components/TokenBar/TokenBar';
import FooterTop from './components/FooterTop/FooterTop';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<TokenBar />
			<FooterTop />
			<Footer />
		</div>
	);
}

export default App;
