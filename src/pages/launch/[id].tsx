import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { pageVariantsAnim } from '../../animation';
import { useLaunches } from '../../services/Queries';
import ImageGallery from 'react-image-gallery';
import no_Image from '../../../public/images/noImage.png';

import { RocketType } from '../../types';
import PayLoad from '../../components/launch/PayLoad';
import YouTube from '../../components/launch/YouTube';

const LaunchDetails = () => {
	const { data, isSuccess } = useLaunches();

	const router = useRouter();
	const {
		query: { id },
	} = router;
	const launch = data! && data!.filter((launch) => launch.id === id);
	console.log(launch);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
		>
			<div>
				<div>
					<Image
						src={
							launch?.[0].links.patch.small === undefined
								? no_Image
								: launch?.[0].links.patch.small
						}
						alt='No image Found'
						height={100}
						width={100}
					/>
				</div>
				<div>
					<div>
						<h1>{launch && launch[0]?.name}</h1>
						<h2>{launch && launch[0]?.flight_number}</h2>
					</div>
					<h3>{launch && launch[0]?.date_local}</h3>
				</div>
				<div>
					<div>
						<h3>ROCKET :</h3>
						{launch && launch[0]?.launchpad[0]?.locality && (
							<h3>LAUNCH SITE :</h3>
						)}
						{launch && launch[0]?.launchpad[0]?.name && <h3>LAUNCHPAD :</h3>}
					</div>
					<div>
						<h3>
							{launch && launch[0]?.rocket === RocketType.f1
								? 'Falcon 1'
								: launch && launch[0]?.rocket === RocketType.f9
								? 'Falcon 9'
								: launch && launch[0]?.rocket === RocketType.fh
								? 'Falcon Heavy'
								: launch && launch[0]?.rocket === RocketType.starship
								? 'Starship'
								: ''}
						</h3>
						{launch && launch[0]?.launchpad[0]?.locality && (
							<h3>{launch[0]?.launchpad[0]?.locality}</h3>
						)}
						{launch && launch[0]?.launchpad[0]?.name && (
							<h3>{launch[0]?.launchpad[0]?.name}</h3>
						)}
					</div>
				</div>
				<PayLoad payLoads={launch && launch[0]?.payloads} />

				{launch && launch[0]?.links.flickr.original.length > 0 ? (
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
				) : null}
				<YouTube youTubeId={launch && launch[0]?.links.youtube_id} />
			</div>
		</motion.div>
	);
};

export default LaunchDetails;
