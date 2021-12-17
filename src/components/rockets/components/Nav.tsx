interface Props {
	setRocketName: React.Dispatch<React.SetStateAction<string>>;
}

const Nav = ({ setRocketName }: Props) => {
	return (
		<div className='flex flex-col fixed inset-y-0 right-0 w-16'>
			<ul className='flex flex-col'>
				<button onClick={() => setRocketName('rockets')}>
					rockets details
				</button>
				<button onClick={() => setRocketName('f1')}>f1</button>
				<button onClick={() => setRocketName('f9')}>f9</button>
				<button onClick={() => setRocketName('fh')}>fh</button>
				<button onClick={() => setRocketName('st')}>st</button>
			</ul>
		</div>
	);
};

export default Nav;
