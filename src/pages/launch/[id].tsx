import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import { pageVariantsAnim } from '../../animation';
import {
	useLaunches,
	useLaunchPads,
	usePayLoads,
} from '../../services/Queries';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import PayLoad from '../../components/launch/PayLoad';
import YouTube from '../../components/launch/YouTube';
import LaunchInfo from '../../components/launch/LaunchInfo';

const LaunchDetails = () => {
	const { data, isSuccess } = useLaunches();

	const { data: launchPads } = useLaunchPads();

	const { data: payLoads } = usePayLoads();

	const router = useRouter();
	const {
		query: { id },
	} = router;

	const launch = data! && data!.filter((launch) => launch.id === id);
	console.log(launch);

	const launchPad = launch?.[0]?.launchpad;
	const payLoad = launch?.[0]?.payloads[0];

	const launchSite =
		launchPads! && launchPads.filter((pad) => pad.id === launchPad);

	const launchPayLoad =
		payLoads! && payLoads.filter((load) => load.id === payLoad);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex justify-center bg-gradient-to-b from-black to-gray-900 h-full pt-32 pb-8 overflow-y-auto'
		>
			<div className='w-4/5 max-w-3xl h-full'>
				<LaunchInfo
					name={launchSite?.[0]?.name}
					date={launch?.[0]?.date_local}
					number={launch?.[0]?.flight_number}
					rocket={launch?.[0]?.rocket}
					patch_small={launch?.[0]?.links.patch.small}
					details={launchSite?.[0]?.details}
					status={
						launch?.[0]?.success
							? 'successfull'
							: launch?.[0]?.success === null
							? 'upcoming'
							: 'failed'
					}
					launchSite={launchSite?.[0]?.full_name}
					region={launchSite?.[0]?.region}
				/>

				<PayLoad payLoads={launchPayLoad} />

				{launch && launch[0]?.links.flickr.original.length > 0 ? (
					<div className='mb-16'>
						<ImageGallery
							infinite
							showPlayButton={false}
							showThumbnails={false}
							showBullets
							items={
								launch &&
								launch[0]?.links.flickr.original.map((image) => ({
									original: image,
								}))
							}
						/>
					</div>
				) : null}
				<YouTube youTubeId={launch && launch[0]?.links.youtube_id} />
			</div>
		</motion.div>
	);
};

export default LaunchDetails;
