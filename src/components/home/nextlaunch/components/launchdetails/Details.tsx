import React from 'react';

type launchDetailsProps = {
	flightNumber: Number;
	dateLocal: string;
	details: string;
	rocketName: string;
	launchPadFullName: string;
	datePrecision: string;
};

const Details = React.memo(
	({
		// launchPadFullName,
		rocketName,
		dateLocal,
		flightNumber,
		details,
	}: launchDetailsProps) => {
		return (
			<div>
				{flightNumber && (
					<div>
						<p>Flight :</p>
						<p>{flightNumber}</p>
					</div>
				)}
				{dateLocal && (
					<div>
						<p>Launch Date :</p>
						<p>{new Date(dateLocal)}</p>
					</div>
				)}
				{rocketName && (
					<div>
						<p>Rocket :</p>
						<p>{rocketName}</p>
					</div>
				)}
				{/* {launchPadFullName && (
					<div>
						<p>Launch Site :</p>
						<p>{launchPadFullName}</p>
					</div>
				)} */}
				{details && (
					<div>
						<p>Details :</p>
						<p>{details}</p>
					</div>
				)}
			</div>
		);
	}
);

export default Details;
