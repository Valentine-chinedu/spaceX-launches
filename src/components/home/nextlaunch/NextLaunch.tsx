import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-precise-range-plugin';
import { useLaunchPads, useNextLaunch } from '../../../services/Queries';
import { Time } from '../../../types';
import LaunchName from './components/launchname/LaunchName';
import CountDown from './components/countdown/CountDown';
import LaunchDetails from './components/launchdetails/LaunchDetails';
import { motion } from 'framer-motion';
import { bottomToTopAnim } from '../../../animation';

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
	const { data: nextLaunch } = useNextLaunch();

	const { data } = useLaunchPads();

	const launchPad = nextLaunch! && nextLaunch?.launchpad;

	const launchSite = data && data!.filter((pad) => pad.id === launchPad);

	const [timer, setTimer] = useState<Time>(initialTime);

	const dateLocal = nextLaunch! && nextLaunch?.date_local;

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
		<div className='flex flex-col items-center h-screen w-full pt-20 bg-starship_img bg-cover'>
			<motion.div
				variants={bottomToTopAnim}
				initial='hidden'
				animate='show'
				exit='exit'
				className=' w-4/5 pt-8'
			>
				<div className='w-full'>
					<CountDown
						days={timer.days}
						hours={timer.hours}
						minutes={timer.minutes}
						seconds={timer.seconds}
					/>
				</div>
				<div className='flex justify-center items-center w-full h-full'>
					<div className=''>
						<LaunchName
							launchName={nextLaunch! && nextLaunch?.name}
							dateLocal={nextLaunch! && nextLaunch?.date_local}
						/>

						<LaunchDetails
							launch={nextLaunch! && nextLaunch}
							launchSite={launchSite!}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default NextLaunch;
