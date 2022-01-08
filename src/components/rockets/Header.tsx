type headerProps = {
	description: string;
	active: boolean;
	rocketName: string;
};

const Header = ({ description, active, rocketName }: headerProps) => {
	let rocketStatus = { name: 'Active', color: '#4BB543' };

	if (!active) rocketStatus = { name: 'Inactive', color: '#FA113D' };
	if (rocketName === 'Falcon 1')
		rocketStatus = { name: 'Retired', color: '#005288' };
	if (rocketName === 'Starship')
		rocketStatus = { name: 'In Development', color: '#005288' };

	return (
		<div className=' text-stone-100 text-sm md:text-base space-y-4 mb-12'>
			<p className='w-3/4'>{description}</p>
			<h3 className='flex items-center uppercase w-full space-x-2'>
				<span>status :</span>
				<span
					style={{
						color: rocketStatus.color,
					}}
				>
					{rocketStatus.name}
				</span>
			</h3>
		</div>
	);
};

export default Header;
