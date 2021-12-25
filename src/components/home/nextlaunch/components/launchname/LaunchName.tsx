import moment from 'moment';

type launchNameProps = {
	launchName: string;
	dateLocal: string;
};

const LaunchName = ({ launchName, dateLocal }: launchNameProps) => {
	const isAfterLaunch = (): boolean => {
		if (moment() > moment(dateLocal)) return true;
		else return false;
	};
	return (
		<div className='flex w-full mb-12 space-x-4'>
			<h2 className='text-4xl font-bold uppercase text-stone-900'>
				{isAfterLaunch() ? 'Current Launch' : 'Next Launch'} :
			</h2>
			<h2 className='text-4xl font-bold text-stone-100'>{launchName}</h2>
		</div>
	);
};

export default LaunchName;
