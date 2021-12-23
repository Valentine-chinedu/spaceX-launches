import { launches } from './launches';

export interface GlobePoint {
	lat: number;
	lng: number;
	alt: number;
	radius: number;
	color: string;
	label: string;
	version: string;
	velocity_kms: number;
	height_km: number;
	launch: string;
}
