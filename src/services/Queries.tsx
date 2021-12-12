import { useQuery } from 'react-query';
import {
	Capsules,
	Cores,
	Crew,
	Info,
	LandPads,
	launches,
	LaunchPads,
	PayLoads,
	RoadSter,
	Rockets,
	Ships,
	StarLinks,
} from '../types';
import { apiclient } from './Api';

const fetchLaunches = async () => {
	const response = await apiclient.get('/launches');
	return response.data;
};
export const useLaunches = () =>
	useQuery<launches[], Error>('query-launches', fetchLaunches);

const fetchPastLaunches = async () => {
	const response = await apiclient.get('/launches/past');
	return response.data;
};
export const usePastLaunches = () =>
	useQuery<launches[], Error>('query-past-launches', fetchPastLaunches);

const fetchNextLaunches = async () => {
	const response = await apiclient.get('/launches/next');
	return response.data;
};
export const useNextLaunch = () =>
	useQuery<launches, Error>('query-nextlaunch', fetchNextLaunches);

const fetchLatestLaunches = async () => {
	const response = await apiclient.get('/launches/next/latest');
	return response.data;
};
export const useLatestLaunches = () =>
	useQuery<launches[], Error>('query-latestlaunch', fetchLatestLaunches);

const fetchUpcomingLaunches = async () => {
	const response = await apiclient.get('/launches/next/upcoming');
	return response.data;
};
export const useUpcomingLaunches = () =>
	useQuery<launches[], Error>('query-latestlaunch', fetchUpcomingLaunches);

const fetchInfo = async () => {
	const response = await apiclient.get('/company');
	return response.data;
};
export const useInfo = () => useQuery<Info[], Error>('query-info', fetchInfo);

const fetchCapsules = async () => {
	const response = await apiclient.get('/capsules');
	return response.data;
};
export const useCapsules = () =>
	useQuery<Capsules[], Error>('query-capsules', fetchCapsules);

const fetchCores = async () => {
	const response = await apiclient.get('/cores');
	return response.data;
};
export const useCores = () => useQuery<Cores, Error>('query-cores', fetchCores);

const fetchCrew = async () => {
	const response = await apiclient.get('/crew');
	return response.data;
};
export const useCrew = () => useQuery<Crew, Error>('query-crew', fetchCrew);

const fetchLandPads = async () => {
	const response = await apiclient.get('/landpads');
	return response.data;
};
export const useLandPads = () =>
	useQuery<LandPads[], Error>('query-landpads', fetchLandPads);

const fetchLaunchPads = async () => {
	const response = await apiclient.get('/launchpads');
	return response.data;
};
export const useLaunchPads = () =>
	useQuery<LaunchPads[], Error>('query-launchpads', fetchLaunchPads);

const fetchPayLoads = async () => {
	const response = await apiclient.get('/payloads');
	return response.data;
};
export const usePayLoads = () =>
	useQuery<PayLoads[], Error>('query-payloads', fetchPayLoads);

const fetchRoadSter = async () => {
	const response = await apiclient.get('/roadster');
	return response.data;
};
export const useRoadSter = () =>
	useQuery<RoadSter[], Error>('query-roadster', fetchRoadSter);

const fetchRockets = async () => {
	const response = await apiclient.get('/rockets');
	return response.data;
};
export const useRockets = () =>
	useQuery<Rockets[], Error>('query-rockets', fetchRockets);

const fetchShips = async () => {
	const response = await apiclient.get('/ships');
	return response.data;
};
export const useShips = () => useQuery<Ships, Error>('query-ships', fetchShips);

const fetchStarLink = async () => {
	const response = await apiclient.get('/starlink');
	return response.data;
};
export const useStarLink = () =>
	useQuery<StarLinks[], Error>('query-starlink', fetchStarLink);
