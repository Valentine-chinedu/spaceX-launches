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
			<div className='  text-stone-100 mx-4 md:mx-0 w-auto h-auto p-4 md:p-8 bg-stone-800 bg-opacity-70'>
				<div className='flex w-60 md:w-auto space-x-3 md:space-x-4  '>
					<div className='text-sm md:text-base  md:w-auto space-y-2 md:space-y-0'>
						<p>Flight :</p>
						<p>Date :</p>
						<p>Rocket :</p>

						<p>Locality :</p>
						<p>Region :</p>
					</div>
					<div className='text-sm space-y-2 md:space-y-0'>
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

						<p>{launchPad && launchPad[0]?.locality}</p>
						<p>{launchPad && launchPad[0]?.region}</p>
					</div>
				</div>
			</div>
		);
	}
);

export default Details;
