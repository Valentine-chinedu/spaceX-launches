import axios from 'axios';

export const client = axios.create({
	baseURL: 'https//api.spacexdata.com/v4/',
	timeout: 2000,
	headers: {
		'Content-type': 'application/json',
	},
});
