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
			<div className='  text-stone-100 w-auto h-auto p-8 bg-stone-800 bg-opacity-70'>
				<div className='flex w-auto space-x-4 '>
					<div>
						<p>Flight :</p>
						<p>Date :</p>
						<p>Rocket :</p>
						<p>Site :</p>
						<p>Locality :</p>
						<p>Region :</p>
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
						<p>{launchPad && launchPad[0]?.locality}</p>
						<p>{launchPad && launchPad[0]?.region}</p>
					</div>
				</div>
			</div>
		);
	}
);

export default Details;
