import Image from 'next/image';
import React from 'react';
import { useUpcomingLaunches } from '../../services/Queries';
import LaunchInfo from './LaunchInfo';

const UpComingLaunches = () => {
	const { data, isLoading } = useUpcomingLaunches();

	return (
		<div className='w-full'>
			{isLoading ? (
				<div className='flex w-full h-screen justify-center items-center text-2xl text-stone-100 font-semibold'>
					<h2> Loading...</h2>
				</div>
			) : (
				data &&
				data?.map((launch) => (
					<LaunchInfo
						name={launch.name}
						date={launch.date_local}
						number={launch.flight_number}
						rocket={launch.rocket}
						patch_small={launch.links.patch.small}
						details={launch.details}
						status='Upcoming'
						id={launch.id}
					/>
				))
			)}
		</div>
	);
};

export default UpComingLaunches;
