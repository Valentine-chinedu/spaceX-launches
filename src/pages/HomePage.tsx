import React from 'react';
import { LaunchHistoryChart } from '../components/home/chart/LaunchHistoryChart';
import Launches from '../components/home/launches/Launches';
import NextLaunch from '../components/home/nextlaunch/NextLaunch';
import Rockets from '../components/home/rockets/Rockets';
import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../animation';
import Starlink from '../components/home/Starlink';

const HomePage = () => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex flex-col justify-center items-center overflow-x-hidden w-full'
		>
			<NextLaunch />
			<Launches />
			<Rockets />
			<Starlink />
			<LaunchHistoryChart />
		</motion.div>
	);
};

export default HomePage;
