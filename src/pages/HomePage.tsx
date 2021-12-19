import React from 'react';
import { randomQuote } from '../components/other/muskQuotes';
import { LaunchHistoryChart } from '../components/home/chart/LaunchHistoryChart';
import Launches from '../components/home/launches/Launches';
import NextLaunch from '../components/home/nextlaunch/NextLaunch';
import Rockets from '../components/home/rockets/Rockets';
import Starlink from '../components/home/Starlink';

const HomePage = () => {
	return (
		<div>
			<NextLaunch />
			<div>
				<q>{randomQuote()} </q> - <span>Elon Musk</span>
			</div>
			<Launches />
			<Rockets />
			<Starlink />
			<LaunchHistoryChart />
		</div>
	);
};

export default HomePage;
