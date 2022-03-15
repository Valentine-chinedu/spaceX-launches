import 'moment-precise-range-plugin';
import { CountdownProps } from './countDownTypes';

const CountDown = ({ days, hours, minutes, seconds }: CountdownProps) => {
	return (
		<div className='flex w-full h-full items-center justify-center space-x-3 md:space-x-16 lg::space-x-20 text-2xl md:text-5xl lg:text-7xl font-bold text-stone-900 mb-10'>
			<div className='flex flex-col items-center'>
				<h2>{('0' + days).slice(-2)}</h2>
				<h2 className='text-sm md:text-lg text-stone-100'>Days</h2>
			</div>
			<h2 className='relative bottom-3 md:bottom-5'>:</h2>
			<div className='flex flex-col items-center'>
				<h2>{('0' + hours).slice(-2)}</h2>
				<h2 className='text-sm md:text-lg text-stone-100'>Hours</h2>
			</div>
			<h2 className='relative bottom-3 md:bottom-5 '>:</h2>
			<div className='flex flex-col items-center'>
				<h2>{('0' + minutes).slice(-2)}</h2>
				<h2 className='text-sm md:text-lg text-stone-100'>Minutes</h2>
			</div>
			<h2 className='relative bottom-3 md:bottom-5'>:</h2>
			<div className='flex flex-col items-center'>
				<h2>{('0' + seconds).slice(-2)}</h2>
				<h2 className='text-sm md:text-lg text-stone-100'>Seconds</h2>
			</div>
		</div>
	);
};

export default CountDown;
