import { Crew, LaunchPads, PayLoads, Ships } from '.';

export interface launches {
	fairings: null;
	links: {
		patch: {
			small: string;
			large: string;
		};
		reddit: {
			campaign: string;
			launch: string;
			media: string;
			recovery: null;
		};
		flickr: {
			small: string[];
			original: string[];
		};
		presskit: string;
		webcast: string;
		youtube_id: string;
		article: string;
		wikipedia: string;
	};
	static_fire_date_utc: string;
	static_fire_date_unix: number;
	tdb: false;
	net: false;
	window: number;
	rocket: string;
	success: true;
	failures: [];
	details: string;
	crew: Crew[];
	ships: Ships[];
	capsules: string[];
	payloads: string[];
	launchpad: string;
	auto_update: true;
	flight_number: number;
	name: string;
	date_utc: string;
	date_unix: number;
	date_local: string;
	date_precision: string;
	upcoming: false;
	cores: [
		{
			core: string;
			flight: number;
			gridfins: true;
			legs: true;
			reused: true;
			landing_attempt: true;
			landing_success: true;
			landing_type: string;
			landpad: string;
		}
	];
	id: string;
}
