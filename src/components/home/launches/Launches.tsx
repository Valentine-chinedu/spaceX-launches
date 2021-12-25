import { randomQuote } from '../../other/muskQuotes';
import { useLaunches } from '../../../services/Queries';
import Link from 'next/link';

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
		<div className='flex flex-col items-center h-screen w-full bg-launch_img bg-contain'>
			<div className='flex flex-col justify-center w-4/5 h-full'>
				<h2 className='text-8xl font-bold text-stone-100 mb-16'>LAUNCHES</h2>
				<div className='flex text-stone-200 text-4xl space-x-8 mb-12'>
					<div className='space-y-4'>
						<h3>{launches?.data?.length}</h3>

						<h3>{launches.data && successful}</h3>

						<h3>{launches.data && landing}</h3>
						<h3>{launches.data && reused}</h3>
					</div>
					<div className='space-y-4'>
						<h3>TOTAL LAUNCHES</h3>
						<h3>SUCCESSFUL LAUNCHES</h3>
						<h3>TOTAL LANDING</h3>
						<h3>REUSED ROCKETS</h3>
					</div>
				</div>

				<Link href='/Launches'>
					<a className='flex justify-center w-52 border-4 border-stone-900 rounded-md text-stone-100 text-2xl font-semibold py-3 mb-10 bg-opacity-60 bg-stone-900 hover:bg-stone-900'>
						Explore Launches
					</a>
				</Link>

				<div className=' flex justify-center space-x-4 text-stone-100'>
					<q className=' italic text-lg'>{randomQuote()}</q> <span>-</span>
					<span className='text-blue-700 text-lg font-semibold'>Elon Musk</span>
				</div>
			</div>
		</div>
	);
};

export default Launches;
