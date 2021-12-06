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
		datePrecision,
		launchPadFullName,
		rocketName,
		dateLocal,
		flightNumber,
		details,
	}: launchDetailsProps) => {
		let datePrec = 'key';
		if (datePrecision === 'month') datePrec = 'keyMonth';

		return (
			<div>
				{flightNumber && (
					<div>
						<p>(Flight) :</p>
						<p>{flightNumber}</p>
					</div>
				)}
				{dateLocal && (
					<div>
						<p>launch date :</p>
						<p>new Date(dateLocal)</p>
					</div>
				)}
				{rocketName && (
					<div>
						<p>rocket :</p>
						<p>{rocketName}</p>
					</div>
				)}
				{launchPadFullName && (
					<div>
						<p>launch site :</p>
						<p>{launchPadFullName}</p>
					</div>
				)}
				{details && (
					<div>
						<p>details :</p>
						<p>{`${details.slice(0, 120)}...`}</p>
					</div>
				)}
			</div>
		);
	}
);

export default Details;
