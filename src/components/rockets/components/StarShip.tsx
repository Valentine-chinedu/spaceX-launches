interface props {
	rocketName: string;
}

const StarShip = ({ rocketName }: props) => {
	return <div className={`${rocketName === 'st' ? '' : 'hidden'} `}>star</div>;
};

export default StarShip;
