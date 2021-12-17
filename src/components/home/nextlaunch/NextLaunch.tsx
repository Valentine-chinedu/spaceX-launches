import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-precise-range-plugin';
import { useNextLaunch } from '../../../services/Queries';
import { Time } from '../../../types';
import LaunchName from './components/launchname/LaunchName';
import CountDown from './components/countdown/CountDown';

// import LaunchDetails from './components/launchdetails/LaunchDetails';

const initialTime: Time = {
	days: 0,
	firstDateWasLater: true,
	hours: 4,
	minutes: 20,
	months: 0,
	seconds: 69,
	years: 0,
};

const NextLaunch = () => {
	const nextLaunch = useNextLaunch();

	// const [showLivestream, setShowlivestream] = useState(false);
	// const [isTwoMinutesBeforeStart, setIsTwoMinutesBeforeStart] = useState(false);

	// console.log(data);

	// const toggleLivestreamHandler = () => {
	// 	setShowlivestream(!showLivestream);
	// };

	const [timer, setTimer] = useState<Time>(initialTime);
	const dateLocal = nextLaunch.data?.date_local;

	const timeDiff = useCallback(() => {
		const launchDate = moment(dateLocal);
		const currentDate = moment(Date.now());
		const diff = moment.preciseDiff(launchDate, currentDate, true);

		return diff;
	}, [dateLocal]);

	useEffect(() => {
		const timeDifference = timeDiff;
		const interval = setInterval(() => setTimer(timeDifference), 1000);

		// if (timer.days === 0 && timer.hours === 0 && timer.minutes < 2)
		// 	setIsTwoMinutesBeforeStart(true);

		return () => {
			clearInterval(interval);
		};
	}, [timer, timeDiff]);

	return (
		<>
			<LaunchName
				launchName={nextLaunch.data?.name}
				dateLocal={nextLaunch.data?.date_local}
			/>

			<CountDown
				days={timer.days}
				hours={timer.hours}
				minutes={timer.minutes}
				seconds={timer.seconds}
			/>

			{/* <LaunchDetails launch={nextLaunch.data! && nextLaunch.data} /> */}
		</>
	);
};

export default NextLaunch;
