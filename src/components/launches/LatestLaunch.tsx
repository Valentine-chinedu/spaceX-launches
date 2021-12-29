import { useLatestLaunches } from '../../services/Queries';
import LaunchDetails from './LaunchInfo';

const LatestLaunch = () => {
	const { data } = useLatestLaunches();
	return (
		<div>
			{data &&
				data?.map((launch) => (
					<LaunchDetails
						name={launch.name}
						date={launch.date_local}
						number={launch.flight_number}
						rocket={launch.rocket}
						patch_small={launch.links.patch.small}
						details={launch.details}
						status={launch.success ? 'successfull' : 'failed'}
						id={launch.id}
					/>
				))}
		</div>
	);
};

export default LatestLaunch;
