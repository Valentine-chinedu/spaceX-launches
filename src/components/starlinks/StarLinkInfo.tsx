import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { pageVariantsAnim } from '../../animation';
import { StarLinks } from '../../types';

type starlinkProps = {
	starLinkData: StarLinks[];
};

const StarLinkInfo = memo(({ starLinkData }: starlinkProps) => {
	return (
		<div>
			{starLinkData?.map((starLink, index) => (
				<div key={index}>
					<h1>{starLink.spaceTrack.OBJECT_NAME}</h1>
					<div className='flex'>
						<div>
							<h3>Launched :</h3>
							<h3>Period :</h3>
							<h3>Revolution :</h3>
							<h3>Decayed :</h3>
						</div>
						<div>
							<h3>{starLink.spaceTrack.LAUNCH_DATE}</h3>
							<h3>{starLink.spaceTrack.PERIOD}</h3>
							<h3>{starLink.spaceTrack.REV_AT_EPOCH}</h3>
							<h3>{starLink.spaceTrack.DECAYED}</h3>
						</div>
					</div>
				</div>
			))}
		</div>
	);
});

export default StarLinkInfo;
