import Image from 'next/image';

import f1 from '../../../../../public/images/f1.png';
import f9 from '../../../../../public/images/f9.png';
import fh from '../../../../../public/images/fh.png';
import st from '../../../../../public/images/st.png';

interface Props {
	rocketName: string;
}

const AllRockets = ({ rocketName }: Props) => {
	// const rockets = [
	// 	{ name: 'Falcon 1', media: falcon1, alt: 'rocket' },
	// 	{ name: 'Falcon 9', media: falcon9, alt: 'rocket' },
	// 	{ name: 'Falcon Heavy', media: falconHeavy, alt: 'rocket' },
	// 	{ name: 'StarShip', media: Starship, alt: 'rocket' },
	// ];
	return (
		<div
			className={`flex justify-center items-start bg-green-800 ${
				rocketName !== 'rockets' ? 'hidden' : ''
			} `}
		>
			<div className={`flex flex-col items-center justify-end bg-red-300 `}>
				<Image src={f1} alt='rocket' />
				<h3>Falcon 1</h3>
			</div>
			<div className={`flex flex-col items-center justify-end bg-yellow-200 `}>
				<Image className='' src={f9} alt='rocket' />
				<h3>Falcon 9</h3>
			</div>
			<div className={`flex flex-col items-center justify-start bg-green-400 `}>
				<Image className='bg-blue-800 h-[20]' src={fh} alt='rocket' />
				<h3>Falcon heavy</h3>
			</div>
			<div className={` flex flex-col items-center justify-end bg-blue-600 `}>
				<Image className='' src={st} alt='rocket' />
				<h3>Starship</h3>
			</div>
		</div>
	);
};

export default AllRockets;
