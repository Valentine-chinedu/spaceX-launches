import Image from 'next/image';
import Link from 'next/link';

import f1 from '../../../../../public/images/f1.png';
import f9 from '../../../../../public/images/f9.png';
import fh from '../../../../../public/images/falconHeavy.png';
import st from '../../../../../public/images/st.png';
import { useRockets } from '../../../../services/Queries';

interface Props {
	rocketName: string;
}

const AllRockets = ({ rocketName }: Props) => {
	const { data } = useRockets();
	console.log(data);
	return (
		<div
			className={`flex justify-center items-end w-full space-x-20 ${
				rocketName !== 'rockets' ? 'hidden' : ''
			} `}
		>
			<Link
				href={`/rockets/${data && data[0].id}`}
				as={`/rockets/${data && data[0].name}`}
			>
				<a className={`w-full`}>
					<Image
						className='object-contain'
						src={f1}
						alt='rocket'
						height={700}
						width={500}
						layout='responsive'
					/>
					<h3>Falcon 1</h3>
				</a>
			</Link>
			<Link
				href={`/rockets/${data && data[1].id}`}
				as={`/rockets/${data && data[1].name}`}
			>
				<a className={`w-full `}>
					<Image
						className='object-contain'
						src={f9}
						alt='rocket'
						height={900}
						width={500}
						layout='responsive'
					/>
					<h3>Falcon 9</h3>
				</a>
			</Link>
			<Link
				href={`/rockets/${data && data[2].id}`}
				as={`/rockets/${data && data[2].name}`}
			>
				<a className={`w-full `}>
					<Image
						className='object-contain'
						src={fh}
						alt='rocket'
						height={230}
						width={100}
						layout='responsive'
					/>
					<h3>Falcon Heavy</h3>
				</a>
			</Link>
			<Link
				href={`/rockets/${data && data[3].id}`}
				as={`/rockets/${data && data[3].name}`}
			>
				<a className={`w-full`}>
					<Image
						className='object-contain'
						src={st}
						alt='rocket'
						height={1500}
						width={500}
						layout='responsive'
					/>
					<h3>Starship</h3>
				</a>
			</Link>
		</div>
	);
};

export default AllRockets;
