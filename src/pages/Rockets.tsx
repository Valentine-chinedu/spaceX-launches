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
			className='flex flex-col md:flex-none  bg-gradient-to-b from-black to-gray-900 pt-28 md:px-16 h-screen  relative  overflow-hidden md:overflow-y-hidden'
		>
			<AboutRockets />

			<AllRockets />
		</motion.div>
	);
};

export default Rockets;
