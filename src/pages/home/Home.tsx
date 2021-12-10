import React from 'react';
import { randomQuote } from '../../other/muskQuotes';
import Launches from './components/launches/Launches';
// import LaunchHistoryChart from './launchhistory/LaunchHistoryChart';
import NextLaunch from './components/nextlaunch/NextLaunch';
import Rockets from './components/rockets/Rockets';
import Starlink from './components/starlink/Starlink';

const Home = () => {
	return (
		<div>
			<NextLaunch />
			<div>
				<q>{randomQuote()} </q> - <span>Elon Musk</span>
			</div>
			<Launches />
			<Rockets />
			<Starlink />
		</div>
	);
};

export default Home;
