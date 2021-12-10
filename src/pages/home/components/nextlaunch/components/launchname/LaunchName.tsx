import moment from 'moment';

type launchNameProps = {
	launchName: string | undefined;
	dateLocal: string | undefined;
};

const LaunchName = ({ launchName, dateLocal }: launchNameProps) => {
	const isAfterLaunch = (): boolean => {
		if (moment() > moment(dateLocal)) return true;
		else return false;
	};
	return (
		<div>
			<h2>{isAfterLaunch() ? 'Current Launch' : 'Next Launch'} :</h2>
			<h2>{launchName}</h2>
		</div>
	);
};

export default LaunchName;
