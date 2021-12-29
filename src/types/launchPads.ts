import { Images } from '.';

export interface LaunchPads {
	name: string;
	full_name: string;
	locality: string;
	region: string;
	timezone: string;
	latitude: number;
	longitude: number;
	launch_attempts: number;
	launch_successes: number;
	rockets: string[];
	launches: string[];
	status: string;
	id: string;
	images: Images;
	details: string;
}
