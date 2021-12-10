import { launches } from './launches';

export interface capsules {
	reuse_count: number;
	water_landings: number;
	land_landings: number;
	last_update: string;
	launches: launches[];
	serial: string;
	status: string;
	type: string;
	id: string | number;
}
