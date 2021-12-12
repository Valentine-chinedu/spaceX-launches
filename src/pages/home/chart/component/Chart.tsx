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
	name: string;
};

console.log(defaults);
export const Chart = ({ name, data }: chartProps) => {
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: false,
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
					display: true,
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
					drawBprder: true,
					color: 'white',
					// zeroLineColor: 'white',
				},
				ticks: {
					color: 'white',
				},
			},
		},
	};

	return (
		<div>
			<h2>{name}</h2>
			<Bar data={data} options={options} />
		</div>
	);
};
