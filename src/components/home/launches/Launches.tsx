import { Button } from '../../shared/Button';
import { randomQuote } from '../../other/muskQuotes';
import { useLaunches } from '../../../services/Queries';

const Launches = () => {
	const launches = useLaunches();

	const successful: number =
		launches.data! &&
		launches.data.filter((launch) => launch.success === true).length;
	const landing: number =
		launches.data! &&
		launches.data.filter((launch) => launch.cores[0].landing_success === true)
			.length;
	const reused: number =
		launches.data! &&
		launches.data.filter((launch) => launch.cores[0].reused === true).length;
	return (
		<div>
			<div>
				<span>{launches?.data?.length}</span>
				<span>TOTAL LAUNCHES</span>
			</div>
			<div>
				<span>{launches.data && successful}</span>
				<span>SUCCESSFUL LAUNCHES</span>
			</div>
			<div>
				<span>{launches.data && landing}</span>
				<span>TOTAL LANDING</span>
			</div>
			<div>
				<span>{launches.data && reused}</span>
				<span>REUSED ROCKETS</span>
			</div>
			<div>
				<Button name='Explore ALL Launches' />
			</div>

			<div>
				<q>{randomQuote()}</q> - <span>Elon Musk</span>
			</div>
		</div>
	);
};

export default Launches;
