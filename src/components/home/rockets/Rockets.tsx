import { Button } from '../../shared/Button';
import { randomRQuote } from '../../other/rocketQuotes';

const Rockets = () => {
	return (
		<div>
			<h3>Rockets</h3>
			<h3>{randomRQuote()}</h3>
			<Button name='Explore All Rockets' />
		</div>
	);
};

export default Rockets;
