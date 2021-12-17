import { useEffect, useState } from 'react';
import AboutRockets from '../components/rockets/components/AboutRockets';
import AllRockets from '../components/rockets/components/allrocketes/AllRockets';
import Falcon1 from '../components/rockets/components/Falcon1';
import Falcon9 from '../components/rockets/components/Falcon9';
import FalconHeavy from '../components/rockets/components/FalconHeavy';
import Nav from '../components/rockets/components/Nav';
import StarShip from '../components/rockets/components/StarShip';

// type rocketState = {

// }
const Rockets = () => {
	// const rocketState = [
	// 	{ name: 'rockets', isVisible: true },
	// 	{ name: 'f1', isVisible: false },
	// 	{ name: 'f9', isVisible: false },
	// 	{ name: 'fH', isVisible: false },
	// 	{ name: 'fS', isVisible: false },
	// ];

	const [rocketName, setRocketName] = useState('');
	useEffect(() => {
		setRocketName('rockets');
	}, []);
	return (
		<div>
			<AboutRockets />
			<Nav setRocketName={setRocketName} />
			<AllRockets rocketName={rocketName} />
			<Falcon1 rocketName={rocketName} />
			<Falcon9 rocketName={rocketName} />
			<FalconHeavy rocketName={rocketName} />
			<StarShip rocketName={rocketName} />
		</div>
	);
};

export default Rockets;
