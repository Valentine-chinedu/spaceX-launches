import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div>
			<Link to='/'>SpacexInfo</Link>
			<div>
				<Link to='rockets'>Rockets</Link>
				<Link to='launches'>Launches</Link>
				<Link to='starlink'>Starlink</Link>
			</div>
		</div>
	);
};

export default NavBar;
