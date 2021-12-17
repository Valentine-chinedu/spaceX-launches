import Link from 'next/link';

const NavBar = () => {
	return (
		<div>
			<Link href='/'>SpacexInfo</Link>
			<div>
				<Link href='/Rockets'>Rockets</Link>
				<Link href='/Launches'>Launches</Link>
				<Link href='/StarLink'>Starlink</Link>
			</div>
		</div>
	);
};

export default NavBar;
