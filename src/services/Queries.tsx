import { useQuery } from 'react-query';
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

const fetchLaunches = async () => {
	const response = await apiclient.get('/launches');
	return response.data;
};
export const useLaunches = () =>
	useQuery<launches, Error>('query-launches', fetchLaunches);

const fetchNextLaunch = async () => {
	const response = await apiclient.get('/launches/next');
	return response.data;
};
export const useNextLaunch = () =>
	useQuery<any, Error, launches>('query-nextlaunch', fetchNextLaunch);

const fetchLatestLaunch = async () => {
	const response = await apiclient.get('/launches/next/latest');
	return response.data;
};
export const useLatestLaunch = () =>
	useQuery<launches, Error>('query-latestlaunch', fetchLatestLaunch);

const fetchUpcomingLaunch = async () => {
	const response = await apiclient.get('/launches/next/upcoming');
	return response.data;
};
export const useUpcomingLaunch = () =>
	useQuery<launches, Error>('query-latestlaunch', fetchUpcomingLaunch);

const fetchInfo = async () => {
	const response = await apiclient.get('/company');
	return response.data;
};
export const useInfo = () => useQuery<info, Error>('query-info', fetchInfo);

const fetchCapsules = async () => {
	const response = await apiclient.get('/capsules');
	return response.data;
};
export const useCapsules = () =>
	useQuery<capsules, Error>('query-capsules', fetchCapsules);

const fetchCores = async () => {
	const response = await apiclient.get('/cores');
	return response.data;
};
export const useCores = () => useQuery<cores, Error>('query-cores', fetchCores);

const fetchCrew = async () => {
	const response = await apiclient.get('/crew');
	return response.data;
};
export const useCrew = () => useQuery<crew, Error>('query-crew', fetchCrew);

const fetchLandPads = async () => {
	const response = await apiclient.get('/landpads');
	return response.data;
};
export const useLandPads = () =>
	useQuery<landPads, Error>('query-landpads', fetchLandPads);

const fetchLaunchPads = async () => {
	const response = await apiclient.get('/launchpads');
	return response.data;
};
export const useLaunchPads = () =>
	useQuery<launchPads, Error>('query-launchpads', fetchLaunchPads);

const fetchPayLoads = async () => {
	const response = await apiclient.get('/payloads');
	return response.data;
};
export const usePayLoads = () =>
	useQuery<payLoads, Error>('query-payloads', fetchPayLoads);

const fetchRoadSter = async () => {
	const response = await apiclient.get('/roadster');
	return response.data;
};
export const useRoadSter = () =>
	useQuery<roadSter, Error>('query-roadster', fetchRoadSter);

const fetchRockets = async () => {
	const response = await apiclient.get('/rockets');
	return response.data;
};
export const useRockets = () =>
	useQuery<rockets, Error>('query-rockets', fetchRockets);

const fetchShips = async () => {
	const response = await apiclient.get('/ships');
	return response.data;
};
export const useShips = () => useQuery<ships, Error>('query-ships', fetchShips);

const fetchStarLink = async () => {
	const response = await apiclient.get('/starlink');
	return response.data;
};
export const useStarLink = () =>
	useQuery<starLinks, Error>('query-starlink', fetchStarLink);
