import React, { useState, useEffect } from 'react';
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
		<div>
			{/* <LatestLaunch /> */}
			<div>
				<select onChange={onChangeHandler}>
					<option value='upcoming'>UPCOMING LAUNCHES</option>
					<option value='past'>PAST LAUNCHES</option>
				</select>
			</div>
			{selected === 'upcoming' ? <UpComingLaunches /> : <PastLaunches />}
		</div>
	);
};

export default Launches;
