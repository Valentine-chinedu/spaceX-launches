import { last, range } from 'lodash';

import {
	usePastLaunches,
	useUpcomingLaunches,
} from '../../../services/Queries';
import { getYear } from '../../../../utils/utility';
import { RocketType } from '../../../types';

import { Chart } from './Chart';

// import faker from 'faker';

// type datasets = Array<{}>

export const LaunchHistoryChart = () => {
	const upComingLaunches = useUpcomingLaunches();
	const pastLaunches = usePastLaunches();

	const launchesYearStart: number = 2006;

	let data = {};

	const upComingLaunchesYears: number[] | undefined =
		upComingLaunches.data &&
		upComingLaunches.data
			.map((launch) => new Date(launch.date_utc).getFullYear())
			.sort();
	// upComingLaunchesYears.sort();

	const launchesStartEnd: number | undefined = last(upComingLaunchesYears);
	const years = range(
		launchesYearStart,
		launchesStartEnd ? launchesStartEnd + 1 : new Date().getFullYear()
	);

	const labels = years;

	data = {
		labels,
		datasets: [
			{
				label: 'Falcon 1',
				backgroundColor: 'rgb(255,142,48)',

				data: years.map(
					(year) =>
						pastLaunches.data &&
						pastLaunches.data.filter(
							(launch) =>
								getYear(launch) === year &&
								launch?.rocket === RocketType.f1 &&
								launch?.success
						).length
				),
				barThickness: 25,
			},
			{
				label: ' Falcon 9',
				backgroundColor: 'rgb(0,102,255)',
				data: years.map(
					(year) =>
						pastLaunches.data &&
						pastLaunches.data.filter(
							(launch) =>
								getYear(launch) === year &&
								launch?.rocket === RocketType.f9 &&
								launch?.success &&
								!launch?.cores[0].reused
						).length
				),
				barThickness: 25,
			},
			{
				label: ' Falcon 9',
				backgroundColor: 'rgb(68,149,208)',
				data: years.map(
					(year) =>
						pastLaunches.data &&
						pastLaunches.data.filter(
							(launch) =>
								getYear(launch) === year &&
								launch?.rocket === RocketType.f9 &&
								launch?.success &&
								launch?.cores[0].reused
						).length
				),
				barThickness: 25,
			},
			{
				label: 'Falcon Heavy',
				backgroundColor: 'rgb(126,237,148)',
				data: years.map(
					(year) =>
						pastLaunches.data &&
						pastLaunches.data.filter(
							(launch) =>
								getYear(launch) === year &&
								launch?.rocket === RocketType.fh &&
								launch?.success
						).length
				),
				barThickness: 25,
			},
			{
				label: 'failure',
				backgroundColor: 'rgb(255, 0, 0)',
				data: years?.map(
					(year) =>
						pastLaunches.data &&
						pastLaunches.data.filter(
							(launch) =>
								getYear(launch) === year &&
								launch?.success !== null &&
								!launch?.success
						).length
				),
				barThickness: 25,
				barPercentage: 1,
			},
			{
				label: 'planned',
				backgroundColor: 'rgb(255, 255, 255)',
				data: years.map(
					(year) =>
						upComingLaunches.data &&
						upComingLaunches.data.filter((launch) => getYear(launch) === year)
							.length
				),
				barThickness: 8,
			},
		],
	};

	return (
		<div className='bg-gray-900 text-white'>
			<Chart data={data} name='Launch History' />;
		</div>
	);
};
