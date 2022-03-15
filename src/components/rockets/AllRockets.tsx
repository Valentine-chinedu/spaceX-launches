import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import f1 from '../../../public/images/f1.png';
import f9 from '../../../public/images/f9.png';
import fh from '../../../public/images/fh.png';
import st from '../../../public/images/st.png';
import { useRockets } from '../../services/Queries';

const AllRockets = () => {
	const { data } = useRockets();
	console.log(data);
	return (
		<div className='flex absolute justify-center items-end w-full space-x-8 md:space-x-8 lg:space-x-36 pb-4 lg:p-0 bottom-10 z-30 px-20 md:pr-24 '>
			<Link href={`/rockets/${data && data[0].id}`}>
				<a className='flex flex-col items-center space-y-4'>
					<Image
						src={f1}
						alt='rocket'
						className='hover:scale-x-110 transform duration-500'
					/>
					<h3 className=' text-sm md:text-base text-stone-100 font-semibold'>
						Falcon 1
					</h3>
				</a>
			</Link>
			<Link href={`/rockets/${data && data[1].id}`}>
				<a className='flex flex-col items-center space-y-4'>
					<Image
						src={f9}
						alt='rocket'
						className='hover:scale-x-110 transform duration-500'
					/>
					<h2 className='text-sm md:text-base text-stone-100 font-semibold'>
						Falcon 9
					</h2>
				</a>
			</Link>
			<Link href={`/rockets/${data && data[2].id}`}>
				<a className='flex flex-col items-center space-y-4'>
					<Image
						src={fh}
						alt='rocket'
						className='hover:scale-x-110 transform duration-500'
					/>
					<h3 className='text-sm md:text-base text-stone-100 font-semibold'>
						Falcon Heavy
					</h3>
				</a>
			</Link>
			<Link href={`/rockets/${data && data[3].id}`}>
				<a className='flex flex-col items-center space-y-4'>
					<Image
						src={st}
						alt='rocket'
						className='hover:scale-x-110 transform duration-500'
					/>
					<h3 className='text-sm md:text-base text-stone-100 font-semibold'>
						Starship
					</h3>
				</a>
			</Link>
		</div>
	);
};

export default AllRockets;
