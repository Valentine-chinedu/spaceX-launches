import Link from 'next/link';
import { randomRQuote } from '../../other/rocketQuotes';

const Rockets = () => {
	return (
		<div className='flex flex-col items-center h-screen w-full bg-rocket_img bg-contain md:bg-contain overflow-x-hidden'>
			<div className='flex flex-col justify-center items-center md:items-start w-full md:w-4/5 max-w-5xl h-full'>
				<h3 className='uppercase text-6xl md:text-8xl font-bold text-stone-100 mb-20'>
					Rockets
				</h3>
				<h3 className='text-stone-100 text-2xl md:text-4xl mx-2 md:mx-0 mb-14 p-4 md:w-auto bg-stone-800 bg-opacity-50'>
					{randomRQuote()}
				</h3>
				<Link href='/Rockets'>
					<a className='flex justify-center w-44 md:w-52 border-4 border-amber-900 rounded-md text-stone-100 text-lg md:text-2xl font-semibold py-3 mb-10 bg-opacity-60 bg-amber-800 hover:bg-amber-900'>
						Explore Rocket
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Rockets;
