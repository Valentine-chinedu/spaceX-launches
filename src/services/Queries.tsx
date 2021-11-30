import {
	capsules,
	cores,
	crew,
	info,
	landPads,
	launches,
	launchPads,
	payLoads,
	roadSter,
	rockets,
	ships,
	starLinks,
} from '../types';
import { apiclient } from './Api';

export const Launches = async () => {
	const response = await apiclient.get<launches>('/launches');
	return response.data;
};
export const Info = async () => {
	const response = await apiclient.get<info>('/company');
	return response.data;
};
export const Capsules = async () => {
	const response = await apiclient.get<capsules>('/capsules');
	return response.data;
};
export const Cores = async () => {
	const response = await apiclient.get<cores>('/cores');
	return response.data;
};
export const Crew = async () => {
	const response = await apiclient.get<crew>('/crew');
	return response.data;
};
export const LandPads = async () => {
	const response = await apiclient.get<landPads>('/landpads');
	return response.data;
};
export const LaunchPads = async () => {
	const response = await apiclient.get<launchPads>('/launchpads');
	return response.data;
};
export const PayLoads = async () => {
	const response = await apiclient.get<payLoads>('/payloads');
	return response.data;
};
export const RoadSter = async () => {
	const response = await apiclient.get<roadSter>('/roadster');
	return response.data;
};
export const Rockets = async () => {
	const response = await apiclient.get<rockets>('/rockets');
	return response.data;
};
export const Ships = async () => {
	const response = await apiclient.get<ships>('/ships');
	return response.data;
};
export const Starlink = async () => {
	const response = await apiclient.get<starLinks>('/starlink');
	return response.data;
};
