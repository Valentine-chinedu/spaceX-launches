import Image from 'next/image';
import React from 'react';
import { RocketType } from '../../types';
import noImage from '../../../public/images/noImage.png';
import Link from 'next/link';

interface IProps {
	name: string;
	date: string;
	number: number;
	rocket: string;
	patch_small: string;
	details: string;
	status: string;
	id: string;
}
const LaunchInfo = ({
	name,
	date,
	number,
	rocket,
	patch_small,
	details,
	status,
	id,
}: IProps) => {
	return (
		<Link href={`/launch/${id}`}>
			<a>
				<div key={id}>
					<div>
						<div>
							<h1>{name}</h1>
							<h3>{date}</h3>
						</div>
						<h2>{number}</h2>
					</div>

					<div>
						<span>ROCKET :</span>
						<span>
							{rocket === RocketType.f1
								? 'Falcon 1'
								: rocket === RocketType.f9
								? 'Falcon 9'
								: rocket === RocketType.fh
								? 'Falcon Heavy'
								: rocket === RocketType.starship
								? 'Starship'
								: ''}
						</span>
						<span className='object-contain h-20'>
							<Image
								src={patch_small === null ? noImage : patch_small}
								alt='image not found'
								width={10}
								height={10}
								layout='responsive'
							/>
						</span>
					</div>
					<div>
						<p>{details}</p>
					</div>
					<div>
						<span>status :</span>
						<span>{status}</span>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default LaunchInfo;
