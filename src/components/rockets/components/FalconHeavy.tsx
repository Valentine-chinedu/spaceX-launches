interface props {
	rocketName: string;
}

const FalconHeavy = ({ rocketName }: props) => {
	return (
		<div className={`${rocketName !== 'fh' ? 'hidden' : ''} bg-red-500`}>
			fheavy
		</div>
	);
};

export default FalconHeavy;
