interface props {
	rocketName: string;
}

const Falcon1 = ({ rocketName }: props) => {
	return <div className={`${rocketName !== 'f1' ? 'hidden' : ''} `}>f1</div>;
};

export default Falcon1;
