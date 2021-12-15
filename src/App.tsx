import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home, Launches, Rockets, StarLink } from './pages';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/launches' element={<Launches />} />
				<Route path='/rockets' element={<Rockets />} />
				<Route path='/starlink' element={<StarLink />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
