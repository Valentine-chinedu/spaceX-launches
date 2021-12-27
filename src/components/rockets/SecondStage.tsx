import { motion } from 'framer-motion';
import { rightToLeftAnim } from '../../animation';
import { SecondStageType } from '../../types';
import { InfoLine } from '../shared/InfoLine';

type secondStageProps = {
	secondStage: SecondStageType;
};

export const SecondStage = ({ secondStage }: secondStageProps) => {
	return (
		<motion.div
			variants={rightToLeftAnim}
			initial='hidden'
			animate='show'
			exit='exit'
			className='absolute w-full'
		>
			{secondStage.engines && (
				<InfoLine title='engines' value={`${secondStage.engines}`} />
			)}

			{(secondStage.thrust.kN || secondStage.thrust.lbf) && (
				<InfoLine
					title='thrust'
					value={`${secondStage.thrust.kN} kn | ${secondStage.thrust.lbf} lbf`}
				/>
			)}

			{secondStage.fuel_amount_tons && (
				<InfoLine
					title='fuelAmount'
					value={`${secondStage.fuel_amount_tons} tons`}
				/>
			)}

			{secondStage.burn_time_sec && (
				<InfoLine title='burnTime' value={`${secondStage.burn_time_sec} sec`} />
			)}
		</motion.div>
	);
};
