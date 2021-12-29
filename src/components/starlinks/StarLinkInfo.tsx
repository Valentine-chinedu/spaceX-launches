import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { pageVariantsAnim } from '../../animation';
import { StarLinks } from '../../types';

type starlinkProps = {
	starLinkData: StarLinks[];
};

const StarLinkInfo = memo(({ starLinkData }: starlinkProps) => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
		>
			{starLinkData?.map((starLink, index) => (
				<div
					key={index}
					className='bg-gray-900 mb-4 text-stone-100 p-8 rounded-md'
				>
					<h1 className='text-amber-900 text-xl font-bold mb-4'>
						{starLink.spaceTrack.OBJECT_NAME}
					</h1>
					<div className='flex justify-between items-start'>
						<div className='flex space-x-4'>
							<div className='space-y-2'>
								<h3>Launched :</h3>
								<h3>Period :</h3>
								<h3>Revolution :</h3>
								<h3>Decayed :</h3>
							</div>
							<div className='space-y-2'>
								<h3>{starLink.spaceTrack.LAUNCH_DATE}</h3>
								<h3>{starLink.spaceTrack.PERIOD}</h3>
								<h3>{starLink.spaceTrack.REV_AT_EPOCH}</h3>
								<h3>{starLink.spaceTrack.DECAYED}</h3>
							</div>
						</div>
						<div className='flex space-x-4'>
							<div className='space-y-2'>
								<h3>Site :</h3>
								<h3>Size :</h3>
								<h3>Type :</h3>
							</div>
							<div className='space-y-2'>
								<h3>{starLink.spaceTrack.SITE}</h3>
								<h3>{starLink.spaceTrack.RCS_SIZE}</h3>
								<h3>{starLink.spaceTrack.OBJECT_TYPE}</h3>
							</div>
						</div>
					</div>
				</div>
			))}
		</motion.div>
	);
});

export default StarLinkInfo;
