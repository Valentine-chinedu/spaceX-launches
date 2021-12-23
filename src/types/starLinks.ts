import { SpaceTrack } from '.';

export interface StarLinks {
	version: string;
	launch: string;
	longitude: number;
	latitude: number;
	height_km: number;
	velocity_kms: number;
	id: string;
	spaceTrack: SpaceTrack;
}
