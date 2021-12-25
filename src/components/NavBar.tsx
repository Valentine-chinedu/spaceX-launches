import Link from 'next/link';

const NavBar = () => {
	return (
		<div className='flex absolute w-full justify-between px-20 py-6 text-xl'>
			<Link href='/'>
				<a className='uppercase text-2xl text-stone-100 font-bold'>
					SpacexInfo
				</a>
			</Link>
			<div className='w-auto space-x-20 text-stone-50 h-full'>
				<Link href='/'>
					<a className='hover:border-b border-stone-50'>Home</a>
				</Link>
				<Link href='/Rockets'>
					<a className='hover:border-b border-stone-50'>Rockets</a>
				</Link>
				<Link href='Launches'>
					<a className='hover:border-b border-stone-50'>Launches</a>
				</Link>
				<Link href='/StarLink'>
					<a className='hover:border-b border-stone-50'>Starlink</a>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
