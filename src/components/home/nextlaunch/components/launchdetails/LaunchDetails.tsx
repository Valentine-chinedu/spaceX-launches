import { useLaunchPads, usePayLoads } from '../../../../../services/Queries';
import { launches, LaunchPads } from '../../../../../types';
import Details from './Details';

type IProps = {
	launch: launches;
	launchSite: LaunchPads[];
};
const LaunchDetails = ({ launch, launchSite }: IProps) => {
	return (
		<div className='w-full'>
			<Details
				flightNumber={launch && launch?.flight_number}
				dateLocal={launch && launch?.date_local}
				details={launch && launch?.details}
				rocketName={launch && launch?.rocket}
				datePrecision={launch && launch?.date_precision}
				launchPad={launchSite! && launchSite}
			/>
		</div>
	);
};

export default LaunchDetails;
