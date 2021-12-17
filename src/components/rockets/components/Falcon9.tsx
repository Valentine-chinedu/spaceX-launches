interface props {
	rocketName: string;
}

const Falcon9 = ({ rocketName }: props) => {
	return <div className={`${rocketName !== 'f9' ? 'hidden' : ''} `}>f9</div>;
};

export default Falcon9;
