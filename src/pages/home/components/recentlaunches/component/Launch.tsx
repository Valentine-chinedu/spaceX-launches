import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ToolTip from '../../../../../components/ToolTip';
import { launches } from '../../../../../types';
import { AiTwotoneCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { RiFlightLandFill } from 'react-icons/ri';

type launchProps = {
	mission: launches;
};

const Launch = React.memo(({ mission }: launchProps) => {
	let navigate = useNavigate();
	return (
		<div>
			<div>
				<img src={mission.links.patch.small} alt='patch' loading='lazy' />
			</div>
			<h3>{mission.name}</h3>
			<h4>date: {new Date(mission.date_utc)}</h4>
			<div>
				<ToolTip
					content={mission.success ? 'Mission successful' : 'Mission failed'}
				>
					{mission.success ? <AiFillCheckCircle /> : <AiTwotoneCheckCircle />}
				</ToolTip>
				{mission.cores[0].landing_success && (
					<ToolTip content={'booster landed'}>
						<RiFlightLandFill />
					</ToolTip>
				)}
			</div>
			<button onClick={() => navigate(`/launch/${mission.id}`)}>
				SHOW DETAILS
			</button>
		</div>
	);
});

export default Launch;
