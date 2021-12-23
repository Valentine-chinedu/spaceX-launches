import React from 'react';
import { randomQuote } from '../components/other/muskQuotes';
import { LaunchHistoryChart } from '../components/home/chart/LaunchHistoryChart';
import Launches from '../components/home/launches/Launches';
import NextLaunch from '../components/home/nextlaunch/NextLaunch';
import Rockets from '../components/home/rockets/Rockets';
import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../animation';
// import Starlink from '../components/home/Starlink';

const HomePage = () => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
		>
			<NextLaunch />
			<div>
				<q>{randomQuote()} </q> - <span>Elon Musk</span>
			</div>
			<Launches />
			<Rockets />
			{/* <Starlink /> */}
			<LaunchHistoryChart />
		</motion.div>
	);
};

export default HomePage;
