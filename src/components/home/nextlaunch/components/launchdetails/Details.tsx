import React from 'react';
import moment from 'moment';
import { LaunchPads, RocketType } from '../../../../../types';

type launchDetailsProps = {
	flightNumber: Number;
	dateLocal: string;
	details: string;
	rocketName: string;
	launchPad: LaunchPads[];
	datePrecision: string;
};

const Details = React.memo(
	({ launchPad, rocketName, dateLocal, flightNumber }: launchDetailsProps) => {
		return (
			<div className='left-64 bg-gray-700 text-gray-300 w-auto h-auto mr-20 p-8'>
				<div className='flex w-auto space-x-4 '>
					<div>
						<p>Flight :</p>
						<p>Date :</p>
						<p>Rocket :</p>
						<p>Site :</p>
						<p>Region :</p>
						<p>Locality :</p>
					</div>
					<div>
						<p>#{flightNumber}</p>
						<p>{moment(dateLocal).format('LL')}</p>
						<p>
							{rocketName === RocketType.f1
								? 'Falcon 1'
								: rocketName === RocketType.f9
								? 'Falcon 9'
								: rocketName === RocketType.fh
								? 'Falcon Heavy'
								: rocketName === RocketType.starship
								? 'Starship'
								: ''}
						</p>
						<p>{launchPad && launchPad[0]?.full_name}</p>
						<p>{launchPad && launchPad[0]?.region}</p>
						<p>{launchPad && launchPad[0]?.locality}</p>
					</div>
				</div>
			</div>
		);
	}
);

export default Details;
