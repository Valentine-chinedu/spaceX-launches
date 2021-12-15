import { useEffect, useState } from 'react';
import AboutRockets from './components/AboutRockets';

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
			<div className='flex flex-col fixed inset-y-0 right-0 w-16'>
				<ul className='flex flex-col'>
					<button onClick={() => setRocketName('rockets')}>
						rockets details
					</button>
					<button onClick={() => setRocketName('f1')}>f1</button>
					<button onClick={() => setRocketName('f9')}>f9</button>
					<button onClick={() => setRocketName('fh')}>fh</button>
					<button onClick={() => setRocketName('st')}>st</button>
				</ul>
			</div>
			<h1 className={`${rocketName !== 'rockets' ? 'hidden' : ''} `}>
				rocket details
			</h1>
			<h1 className={`${rocketName !== 'f1' ? 'hidden' : ''} `}>falcon 1</h1>
			<h1 className={`${rocketName !== 'f9' ? 'hidden' : ''} `}>falcom 9</h1>
			<h1 className={`${rocketName !== 'fh' ? 'hidden' : ''} bg-red-500`}>
				falcom heavy
			</h1>
			<h1 className={`${rocketName === 'st' ? '' : 'hidden'} `}>starship</h1>
		</div>
	);
};

export default Rockets;
