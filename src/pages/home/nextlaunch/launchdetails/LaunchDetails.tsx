import React, { useState } from 'react';
import Details from './Details';
import { launchDetailsProps } from './launcheDetailsTypes';

const LaunchDetails = ({ launch }: launchDetailsProps) => {
	// const [showlaunchDetails, setShowLaunchDetails] = useState(false);

	return (
		<>
			<Details
				flightNumber={launch.flight_number}
				dateLocal={launch.date_local}
				details={launch.details}
				rocketName={launch.rocket}
				datePrecision={launch.date_precision}
				launchPadFullName={launch.launchpad}
			/>
		</>
	);
};

export default LaunchDetails;
