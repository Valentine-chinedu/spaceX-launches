import Link from 'next/link';

const Starlink = () => {
	return (
		<div className='flex flex-col items-center h-screen w-full bg-starlink_img'>
			<div className='flex flex-col justify-center w-4/5 h-full text-stone-100'>
				<h1 className='uppercase text-8xl font-bold text-stone-50 mb-20'>
					Starlink
				</h1>
				<h2 className='text-xl'>
					Colossal constellation of 1892 low-orbit satellites to provide low
					latency, broadband internet system
				</h2>
				<h2 className='text-lg mb-8'>
					Detailed info about coordinates and motion of all starlink satellites
					Data Updated Hourly.
				</h2>
				<Link href='/Launches'>
					<a className='flex justify-center w-52 border-4 border-stone-900 rounded-md text-stone-100 text-2xl font-semibold py-3 mb-10 bg-opacity-20 bg-stone-900 hover:bg-stone-900'>
						Explore Starlinks
					</a>
				</Link>
				<blockquote>
					<p className='mb-2'>
						“You want to wake up in the morning and think the future is going to
						be great - and that’s what being a spacefaring civilization is all
						about. It’s about believing in the future and thinking that the
						future will be better than the past. And I can’t think of anything
						more exciting than going out there and being among the stars.”
					</p>
					<figcaption className='text-blue-700 font-semibold text-lg'>
						-Elon Musk
					</figcaption>
				</blockquote>
			</div>
		</div>
	);
};

export default Starlink;
