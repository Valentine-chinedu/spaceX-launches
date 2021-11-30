import axios from 'axios';

export const apiclient = axios.create({
	baseURL: 'https//api.spacexdata.com/v4/',
	headers: {
		'Content-type': 'application/json',
	},
});
