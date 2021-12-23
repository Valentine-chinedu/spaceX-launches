import { motion } from 'framer-motion';
import { rightToLeftAnim } from '../../animation';
import { Length, Mass, PayloadWeights } from '../../types';
import { InfoLine } from '../shared/InfoLine';

type overviewProps = {
	height: Length;
	diameter: Length;
	mass: Mass;
	payloads: PayloadWeights[];
};

const OverView = ({ height, diameter, mass, payloads }: overviewProps) => {
	return (
		<motion.div
			variants={rightToLeftAnim}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			{height?.meters || height?.feet ? (
				<InfoLine
					title='height'
					value={`${height && height.meters} m | ${height && height.feet} ft`}
				/>
			) : null}

			{diameter?.meters || diameter?.feet ? (
				<InfoLine
					title='diameter'
					value={`${diameter.meters} m | ${diameter.feet} ft`}
				/>
			) : null}

			{mass?.kg || mass?.lb ? (
				<InfoLine title='mass' value={`${mass.kg} kg | ${mass.lb} lb`} />
			) : null}

			{payloads?.map((payload, index) => (
				<InfoLine
					key={index}
					title={payload.id}
					value={`${payload.kg} kg | ${payload.lb} lb`}
				/>
			))}
		</motion.div>
	);
};

export default OverView;
