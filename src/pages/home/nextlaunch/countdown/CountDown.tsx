import 'moment-precise-range-plugin';
import { CountdownProps } from './countDownTypes';

const CountDown = ({ days, hours, minutes, seconds }: CountdownProps) => {
	return (
		<div>
			<div>
				<h2>{('0' + days).slice(-2)}</h2>
				<h2>Days</h2>
			</div>
			<h2>:</h2>
			<div>
				<h2>{('0' + hours).slice(-2)}</h2>
				<h2>Hours</h2>
			</div>
			<h2>:</h2>
			<div>
				<h2>{('0' + minutes).slice(-2)}</h2>
				<h2>Minutes</h2>
			</div>
			<h2>:</h2>
			<div>
				<h2>{('0' + seconds).slice(-2)}</h2>
				<h2>Seconds</h2>
			</div>
		</div>
	);
};

export default CountDown;
