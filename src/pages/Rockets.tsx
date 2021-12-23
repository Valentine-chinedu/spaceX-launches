import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../animation';
import AboutRockets from '../components/rockets/AboutRockets';
import AllRockets from '../components/rockets/AllRockets';

const Rockets = () => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
		>
			<AboutRockets />

			<AllRockets />
		</motion.div>
	);
};

export default Rockets;
