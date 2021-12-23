import Image from 'next/image';
import React from 'react';
import { useUpcomingLaunches } from '../../services/Queries';
import LaunchInfo from './LaunchInfo';

const UpComingLaunches = () => {
	const { data, isLoading, isSuccess } = useUpcomingLaunches();

	return (
		<div>
			{data &&
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
				))}
		</div>
	);
};

export default UpComingLaunches;
