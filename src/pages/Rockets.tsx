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
			className='bg-gradient-to-b from-black to-gray-900 pt-28 px-16 h-screen relative overflow-y-hidden'
		>
			<AboutRockets />

			<AllRockets />
		</motion.div>
	);
};

export default Rockets;
