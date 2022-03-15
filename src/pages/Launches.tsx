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
			className='flex justify-center bg-gradient-to-b h-screen overflow-y-scroll overflow-x-hidden from-black to-gray-900 pt-32'
		>
			<div className='flex flex-col items-cente h-full w-4/5 max-w-5xl'>
				<div className='mb-8'>
					<select
						onChange={onChangeHandler}
						className='text-stone-100 bg-gray-900 rounded-md w-60 h-14 border-amber-900'
					>
						<option value='upcoming'>UPCOMING LAUNCHES</option>
						<option value='past'>PAST LAUNCHES</option>
					</select>
				</div>
				{selected === 'upcoming' ? <UpComingLaunches /> : <PastLaunches />}
			</div>
		</motion.div>
	);
};

export default Launches;
