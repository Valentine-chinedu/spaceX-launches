import { PayLoads } from '../../types';
import { InfoLine } from '../shared/InfoLine';

type payloadProps = {
	payLoads: PayLoads[];
};

const PayLoad = ({ payLoads }: payloadProps) => {
	return (
		<div>
			{payLoads?.map((payload, index) => (
				<div key={index}>
					<h2>payload #{index + 1}</h2>
					{payload.name && <InfoLine title='name' value={`${payload.name}`} />}
					{payload.customers?.length > 0 && (
						<InfoLine title='customer' value={`${[...payload.customers]}, `} />
					)}
					{payload.manufacturers?.length !== 0 ? (
						<InfoLine title='manufacturer' value={`${payload.manufacturers}`} />
					) : null}
					{payload.type && <InfoLine title='type' value={`${payload.type}`} />}
					{(payload.mass_kg || payload.mass_lbs) && (
						<InfoLine
							title='mass'
							value={`${payload.mass_kg} kg | ${payload.mass_lbs} lb`}
						/>
					)}
					{payload.orbit && (
						<InfoLine title='orbit' value={`${payload.orbit}`} />
					)}
				</div>
			))}
		</div>
	);
};

export default PayLoad;
