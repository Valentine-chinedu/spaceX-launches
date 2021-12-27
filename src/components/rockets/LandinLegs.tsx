import { motion } from 'framer-motion';
import { rightToLeftAnim } from '../../animation';
import { LandingLegsTypes } from '../../types';
import { InfoLine } from '../shared/InfoLine';

type landingLegsProps = {
	landingLegs: LandingLegsTypes;
};
export const LandingLegs = ({ landingLegs }: landingLegsProps) => {
	return (
		<motion.div
			variants={rightToLeftAnim}
			initial='hidden'
			animate='show'
			exit='exit'
			className='absolute w-full'
		>
			{landingLegs.number && (
				<InfoLine title='number' value={`${landingLegs.number}`} />
			)}

			{landingLegs.material && (
				<InfoLine title='material' value={`${landingLegs.material} `} />
			)}
		</motion.div>
	);
};
