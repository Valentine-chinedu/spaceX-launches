import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	defaults,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

type chartProps = {
	data: any;
};

console.log(defaults);
export const Chart = ({ data }: chartProps) => {
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
			},
			legend: {
				display: true,
				position: 'bottom' as const,
				labels: {
					color: 'rgb(255, 255, 255)',
				},
			},
		},

		scales: {
			x: {
				stacked: true,
				grid: {
					display: false,
					drawTicks: true,
					Color: 'white',
				},
				ticks: {
					color: 'white',
				},
			},

			y: {
				stacked: true,
				grid: {
					display: true,
					color: 'white',
					drawTicks: true,
				},
				ticks: {
					color: 'white',
				},
			},
		},
	};

	return (
		<div className='flex flex-col justify-center w-3/5 bg-gray-800'>
			<Bar data={data} options={options} />
		</div>
	);
};
