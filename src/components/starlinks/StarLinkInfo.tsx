import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { pageVariantsAnim } from '../../animation';
import { StarLinks } from '../../types';

type starlinkProps = {
	starLinkData: StarLinks[];
	isLoading: boolean;
};

const StarLinkInfo = memo(({ starLinkData, isLoading }: starlinkProps) => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex flex-col items-center w-screen px-4'
		>
			{isLoading ? (
				<div className='flex w-full h-screen justify-center items-center text-2xl text-stone-100 font-semibold'>
					<h2> Loading...</h2>
				</div>
			) : (
				starLinkData?.map((starLink, index) => (
					<div
						key={index}
						className='bg-gray-900 w-full md:w-3/5 text-stone-100 p-2 md:p-8 mb-4 rounded-md'
					>
						<h1 className='text-amber-900 text-xl font-bold mb-4'>
							{starLink.spaceTrack.OBJECT_NAME}
						</h1>
						<div className='flex justify-between items-start text-sm md:text-base'>
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
				))
			)}
		</motion.div>
	);
});

export default StarLinkInfo;
