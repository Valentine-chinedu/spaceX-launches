import React from 'react';
import moment from 'moment';

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
				<div>
					<p>Flight :</p>
					<p>{flightNumber}</p>
				</div>

				<div>
					<p>Launch Date :</p>
					<p>{moment(dateLocal).format('LL')}</p>
				</div>

				<div>
					<p>Rocket :</p>
					<p>{rocketName}</p>
				</div>

				{/* {launchPadFullName && (
					<div>
						<p>Launch Site :</p>
						<p>{launchPadFullName}</p>
					</div>
				)} */}

				<div>
					<p>Details :</p>
					<p>{details}</p>
				</div>
			</div>
		);
	}
);

export default Details;
