import React from 'react';
import { useLaunches } from '../../../services/Queries';

const LaunchHistoryChart = () => {
	const { data, isError } = useLaunches();
	console.log(data);
	return <div></div>;
};

export default LaunchHistoryChart;
