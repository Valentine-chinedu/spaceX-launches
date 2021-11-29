import { address } from './address';
import { link } from './link';

export interface info {
	headquarters: address[];
	links: link[];
	name: string;
	founder: string;
	founded: string;
	employees: number;
	vehicles: number;
	launch_sites: number;
	test_sites: number;
	ceo: string;
	cto: string;
	coo: string;
	cto_propulsion: string;
	valuation: number;
	summary: string;
	id: string;
}
