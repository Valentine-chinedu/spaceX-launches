import Link from 'next/link';
import { randomRQuote } from '../../other/rocketQuotes';

const Rockets = () => {
	return (
		<div className='flex flex-col items-center h-screen w-full bg-rocket_img bg-contain'>
			<div className='flex flex-col justify-center w-4/5 h-full'>
				<h3 className='uppercase text-8xl font-bold text-stone-100 mb-20'>
					Rockets
				</h3>
				<h3 className='text-stone-100 text-4xl mb-14 p-4 w-auto bg-stone-800 bg-opacity-50'>
					{randomRQuote()}
				</h3>
				<Link href='/Launches'>
					<a className='flex justify-center w-52 border-4 border-stone-900 rounded-md text-stone-100 text-2xl font-semibold py-3 mb-10 bg-opacity-60 bg-stone-800 hover:bg-stone-900'>
						Explore Rocket
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Rockets;
