type launchNameProps = {
	launchName: string;
	dateLocal: string;
};

const LaunchName = ({ launchName, dateLocal }: launchNameProps) => {
	const isAfterLaunch = (): boolean => {
		if (new Date() > new Date(dateLocal)) return true;
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
