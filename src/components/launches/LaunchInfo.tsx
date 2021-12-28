import Image from 'next/image';
import React from 'react';
import { RocketType } from '../../types';
import noImage from '../../../public/images/noImage.png';
import Link from 'next/link';
import moment from 'moment';

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
				<div
					key={id}
					className='flex flex-col justify-between text-stone-100 bg-gray-800 w-full rounded mb-8 p-4'
				>
					<div className='flex justify-between items-center'>
						<div>
							<h1 className='text-2xl text-amber-900'>{name}</h1>
							<h3 className='text-xs'>{moment(date).format('LLL')}</h3>
						</div>
						<span className='object-contain '>
							<Image
								src={patch_small === null ? noImage : patch_small}
								alt='image not found'
								width={100}
								height={100}
							/>
						</span>
					</div>

					<div className='flex mb-2'>
						<div className='uppercase mr-2 text-gray-300'>
							<h3>rocket :</h3>
							<h3>status :</h3>
						</div>

						<div>
							<h3>
								{rocket === RocketType.f1
									? 'Falcon 1'
									: rocket === RocketType.f9
									? 'Falcon 9'
									: rocket === RocketType.fh
									? 'Falcon Heavy'
									: rocket === RocketType.starship
									? 'Starship'
									: ''}
							</h3>
							<h3
								className={`capitalize ${
									status === 'failed'
										? 'text-red-700'
										: status === 'successfull'
										? 'text-green-600'
										: ''
								}`}
							>
								{status}
							</h3>
						</div>
					</div>
					<div className='flex justify-between items-end'>
						<p className='text-sm'>{details}</p>
						<h2>#{number}</h2>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default LaunchInfo;
