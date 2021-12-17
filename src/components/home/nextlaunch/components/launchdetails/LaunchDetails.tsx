import Details from './Details';
import { launchDetailsProps } from './launcheDetailsTypes';

const LaunchDetails = ({ launch }: launchDetailsProps) => {
	// const [showlaunchDetails, setShowLaunchDetails] = useState(false);

	return (
		<div>
			<Details
				flightNumber={launch && launch.flight_number}
				dateLocal={launch && launch.date_local}
				details={launch && launch.details}
				rocketName={launch && launch.name}
				datePrecision={launch && launch.date_precision}
				launchPadFullName={launch && launch.launchpad}
			/>
		</div>
	);
	// return (
	// 	<>
	// 		<div>
	// 			<p>Flight :</p>
	// 			<p>{data && data!.flight_number}</p>
	// 		</div>

	// 		<div>
	// 			<p>Launch Date :</p>
	// 			<p>{data && new Date(data!.date_local)}</p>
	// 		</div>

	// 		<div>
	// 			<p>Rocket :</p>
	// 			<p>{data && data!.name}</p>
	// 		</div>

	// 		{/* {launchPadFullName && (
	// 			<div>
	// 				<p>Launch Site :</p>
	// 				<p>{launchPadFullName}</p>
	// 			</div>
	// 		)} */}

	// 		<div>
	// 			<p>Details :</p>
	// 			<p>{data && data!.details}</p>
	// 		</div>
	// 	</>
	// );
};

export default LaunchDetails;
