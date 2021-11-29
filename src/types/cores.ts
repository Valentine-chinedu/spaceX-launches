export interface cores {
	block: number;
	reuse_count: number;
	rtls_attempts: number;
	rtls_landings: number;
	asds_attempts: number;
	asds_landings: number;
	last_update: string;
	launches: Array<string>;
	serial: string;
	status: string;
	id: string;
}
