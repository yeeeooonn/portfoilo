import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Timeline from './routes/Timeline';
import Skills from './routes/Skills';
import Project from './routes/Project';

function App() {
	return (
		// <div>
		// 	<Header />
		// 	<div>
		// 		<Home />
		// 		<About />
		// 		<Timeline />
		// 		<Skills />
		// 		<Project />
		// 	</div>
		// </div>

		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} exact={true} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/timeline'} element={<Timeline />} />
				<Route path={'/skills'} element={<Skills />} />
				<Route path={'/project'} element={<Project />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
