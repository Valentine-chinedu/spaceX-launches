import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { pageVariantsAnim } from '../animation';
// import LatestLaunch from '../components/launches/LatestLaunch';
import PastLaunches from '../components/launches/PastLaunches';
import UpComingLaunches from '../components/launches/UpComingLaunches';

const Launches = () => {
	const [selected, setSelected] = useState('');

	const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelected(event.target.value);
	};

	useEffect(() => {
		setSelected('upcoming');
	}, []);
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
		>
			<div>
				<select onChange={onChangeHandler}>
					<option value='upcoming'>UPCOMING LAUNCHES</option>
					<option value='past'>PAST LAUNCHES</option>
				</select>
			</div>
			{selected === 'upcoming' ? <UpComingLaunches /> : <PastLaunches />}
		</motion.div>
	);
};

export default Launches;
