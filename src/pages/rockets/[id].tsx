import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useRouter } from 'next/router';
import { useRockets } from '../../services/Queries';
import { RocketType } from '../../types';

import f1_image from '../../../public/images/falcon1.png';
import f9_image from '../../../public/images/falcon9.png';
import fh_image from '../../../public/images/falconHeavy.png';
import st_image from '../../../public/images/starship.png';
import no_Image from '../../../public/images/noImage.png';
import Image from 'next/image';

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
	const rocket = data && data.filter((rocket) => rocket.id === id);

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
		if (rocket?.[0].id === RocketType.f1) temp[3].isVisible = false;
		else temp[3].isVisible = true;

		setShowRocketDetails(temp);
	}, [showRocketDetails, rocket?.[0].id]);

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
			className='flex'
		>
			<div>
				<Image
					src={
						rocket?.[0].id === RocketType.f1
							? f1_image
							: rocket?.[0].id === RocketType.f9
							? f9_image
							: rocket?.[0].id === RocketType.fh
							? fh_image
							: rocket?.[0].id === RocketType.starship
							? st_image
							: no_Image
					}
					alt='rocket'
					height={500}
					width={500}
				/>
			</div>
			<div>
				<Header
					rocketName={rocket!?.[0].name}
					active={rocket!?.[0].active}
					description={rocket!?.[0].description}
				/>
				<div>
					{showRocketDetails
						.filter((x) => x.isVisible)
						.map((btn, index) => (
							<button key={index} onClick={() => showDetailsHandler(index)}>
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
				<div>
					<AnimatePresence>
						{showRocketDetails[0].isActive && (
							<OverView
								height={rocket!?.[0].height}
								diameter={rocket!?.[0].diameter}
								mass={rocket!?.[0].mass}
								payloads={rocket!?.[0].payload_weights}
							/>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{showRocketDetails[1].isActive && (
							<FirstStage
								firstStage={rocket!?.[0].first_stage}
								engines={rocket!?.[0].engines}
							/>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{showRocketDetails[2].isActive && (
							<SecondStage secondStage={rocket!?.[0].second_stage} />
						)}
					</AnimatePresence>
					<AnimatePresence>
						{showRocketDetails[3].isActive && (
							<LandingLegs landingLegs={rocket!?.[0].landing_legs} />
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default RocketInfo;
