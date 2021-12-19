import React from 'react';
import { usePastLaunches } from '../../services/Queries';
import LaunchInfo from './LaunchInfo';

const PastLaunches = () => {
	const { data } = usePastLaunches();
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
						status={launch.success ? 'successfull' : 'failed'}
					/>
				))}
		</div>
	);
};

export default PastLaunches;
