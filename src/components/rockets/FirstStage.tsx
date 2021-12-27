import { motion } from 'framer-motion';
import { rightToLeftAnim } from '../../animation';
import { Engines, FirstStageTypes } from '../../types';
import { InfoLine } from '../shared/InfoLine';

type firstStageProps = {
	firstStage: FirstStageTypes;
	engines: Engines;
};

const FirstStage = ({ firstStage, engines }: firstStageProps) => {
	return (
		<motion.div
			variants={rightToLeftAnim}
			initial='hidden'
			animate='show'
			exit='exit'
			className='absolute w-full'
		>
			{firstStage.engines && (
				<InfoLine title='engines' value={`${firstStage.engines}`} />
			)}

			{firstStage.fuel_amount_tons && (
				<InfoLine
					title='fuelAmount'
					value={`${firstStage.fuel_amount_tons} tons`}
				/>
			)}

			{firstStage.burn_time_sec && (
				<InfoLine title='burnTime' value={`${firstStage.burn_time_sec} sec `} />
			)}

			{engines.type && <InfoLine title='type' value={`${engines.type} `} />}

			{engines.version && (
				<InfoLine title='version' value={`${engines.version}`} />
			)}

			{engines.layout && (
				<InfoLine title='layout' value={`${engines.layout}`} />
			)}

			<InfoLine title='reusable' value={firstStage.reusable ? 'YES' : 'NO'} />

			{engines.propellant_1 && (
				<InfoLine title='propellant 1' value={`${engines.propellant_1}`} />
			)}

			{engines.propellant_2 && (
				<InfoLine title='propellant 2' value={`${engines.propellant_2}`} />
			)}
		</motion.div>
	);
};

export default FirstStage;
