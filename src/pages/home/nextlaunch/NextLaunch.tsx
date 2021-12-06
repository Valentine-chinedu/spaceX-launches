import React, { useCallback, useEffect, useState } from 'react';
import * as moment from 'moment';
import 'moment-precise-range-plugin';
import { useNextLaunch } from '../../../services/Queries';
import { time } from '../../../types';
import LaunchName from './launchname/LaunchName';
import CountDown from './countdown/CountDown';

const initialTime: time = {
	days: 0,
	firstDateWasLater: true,
	hours: 4,
	minutes: 20,
	months: 0,
	seconds: 69,
	years: 0,
};

const NextLaunch = () => {
	const { data } = useNextLaunch();

	// const [showLivestream, setShowlivestream] = useState(false);
	// const [isTwoMinutesBeforeStart, setIsTwoMinutesBeforeStart] = useState(false);

	// console.log(data);

	// const toggleLivestreamHandler = () => {
	// 	setShowlivestream(!showLivestream);
	// };

	const [timer, setTimer] = useState<time>(initialTime);
	const dateLocal = data!.date_local;

	const timeDiff = useCallback(() => {
		const launchDate = new Date(dateLocal);
		const currentDate = new Date();
		const diff = moment.preciseDiff(launchDate, currentDate, true);

		return diff;
	}, [moment, dateLocal]);

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
		<div>
			<LaunchName launchName={data!.name} dateLocal={data!.date_local} />

			<CountDown
				days={timer.days}
				hours={timer.hours}
				minutes={timer.minutes}
				seconds={timer.seconds}
			/>
		</div>
	);
};

export default NextLaunch;
