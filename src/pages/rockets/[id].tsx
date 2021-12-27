import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useRouter } from 'next/router';
import { useRockets } from '../../services/Queries';
import { RocketType } from '../../types';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Header from '../../components/rockets/Header';
import OverView from '../../components/rockets/OverVew';
import FirstStage from '../../components/rockets/FirstStage';
import { SecondStage } from '../../components/rockets/SecondStage';
import { LandingLegs } from '../../components/rockets/LandinLegs';
import { pageVariantsAnim } from '../../animation';

const RocketInfo = () => {
	const { data } = useRockets();

	const router = useRouter();
	const {
		query: { id },
	} = router;
	const rocket = data! && data.filter((rocket) => rocket.id === id);

	const showRocketDetailsInitial = [
		{ name: 'overview', isActive: true, isVisible: true },
		{ name: 'stage1', isActive: false, isVisible: true },
		{ name: 'stage2', isActive: false, isVisible: true },
		{ name: 'landingLegs', isActive: false, isVisible: true },
	];

	const [showRocketDetails, setShowRocketDetails] = useState(
		showRocketDetailsInitial
	);

	useEffect(() => {
		const temp = [...showRocketDetails];
		if (rocket && rocket[0]?.id === RocketType.f1) temp[3].isVisible = false;
		else temp[3].isVisible = true;

		setShowRocketDetails(temp);
	}, [showRocketDetails, rocket && rocket[0]?.id]);

	const showDetailsHandler = (id: number) => {
		const temp = [...showRocketDetails];

		temp.forEach((element) => (element.isActive = false));
		temp[id].isActive = true;

		setShowRocketDetails(temp);
	};

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex flex-col items-center justify-center h-full bg-gradient-to-b from-black to-gray-900'
		>
			<div className='flex flex-col relative justify-cente items-center bottom-48 w-3/5 h-screen'>
				<div className=' h-screen flex flex-col justify-center '>
					<Header
						rocketName={rocket && rocket[0]?.name}
						active={rocket && rocket[0]?.active}
						description={rocket && rocket[0]?.description}
					/>
					<div className='flex text-stone-100 space-x-20 mb-4'>
						{showRocketDetails
							.filter((x) => x.isVisible)
							.map((btn, index) => (
								<button
									key={index}
									onClick={() => showDetailsHandler(index)}
									className='border-2 p-2 text-lg hover:bg-amber-900 rounded-md focus:bg-amber-900'
								>
									{btn.name}
								</button>
								// <Butto
								// 	key={index}
								// 	name={btn.name}
								// 	styleType='primary'

								// 	selected={showRocketDetails[index].isActive}
								// />
							))}
					</div>
					<div className='relative'>
						<AnimatePresence>
							{showRocketDetails[0].isActive && (
								<OverView
									height={rocket && rocket[0]?.height}
									diameter={rocket && rocket[0]?.diameter}
									mass={rocket && rocket[0]?.mass}
									payloads={rocket && rocket[0]?.payload_weights}
								/>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{showRocketDetails[1].isActive && (
								<FirstStage
									firstStage={rocket && rocket[0]?.first_stage}
									engines={rocket && rocket[0]?.engines}
								/>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{showRocketDetails[2].isActive && (
								<SecondStage secondStage={rocket && rocket[0]?.second_stage} />
							)}
						</AnimatePresence>
						<AnimatePresence>
							{showRocketDetails[3].isActive && (
								<LandingLegs landingLegs={rocket && rocket[0]?.landing_legs} />
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
			<div className='flex h-screen items-center'>
				{rocket && rocket[0]?.flickr_images.length > 0 ? (
					<ImageGallery
						showPlayButton={false}
						showThumbnails={false}
						showBullets
						items={
							rocket &&
							rocket[0]?.flickr_images.map((img) => ({
								original: img,
							}))
						}
					/>
				) : null}
			</div>
		</motion.div>
	);
};

export default RocketInfo;
