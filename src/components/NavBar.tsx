import Link from 'next/link';

const NavBar = () => {
	return (
		<div className='flex justify-between px-20 py-6 bg-zinc-700 text-xl text-gray-200'>
			<Link href='/'>
				<a className='uppercase text-2xl text-lime-500 font-bold'>SpacexInfo</a>
			</Link>
			<div className='w-auto space-x-20 '>
				<Link href='/'>Home</Link>
				<Link href='/Rockets'>Rockets</Link>
				<Link href='Launches'>Launches</Link>
				<Link href='/StarLink'>Starlink</Link>
			</div>
		</div>
	);
};

export default NavBar;
