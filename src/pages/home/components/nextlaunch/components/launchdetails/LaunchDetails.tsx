import { useNextLaunch } from '../../../../../../services/Queries';

const LaunchDetails = () => {
	// const [showlaunchDetails, setShowLaunchDetails] = useState(false);
	const { data } = useNextLaunch();

	// return (
	// 	<>
	// 		<Details
	// 			flightNumber={data! && data.flight_number}
	// 			dateLocal={data! && data.date_local}
	// 			details={data! && data.details}
	// 			rocketName={data! && data.name}
	// 			datePrecision={data! && data.date_precision}
	// 			launchPadFullName={data! && data.launchpad}
	// 		/>
	// 	</>
	// );
	return (
		<>
			<div>
				<p>Flight :</p>
				<p>{data && data!.flight_number}</p>
			</div>

			<div>
				<p>Launch Date :</p>
				<p>{data && new Date(data!.date_local)}</p>
			</div>

			<div>
				<p>Rocket :</p>
				<p>{data && data!.name}</p>
			</div>

			{/* {launchPadFullName && (
				<div>
					<p>Launch Site :</p>
					<p>{launchPadFullName}</p>
				</div>
			)} */}

			<div>
				<p>Details :</p>
				<p>{data && data!.details}</p>
			</div>
		</>
	);
};

export default LaunchDetails;
