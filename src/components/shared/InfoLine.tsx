import React, { memo } from 'react';

type infoLineProps = {
	title: string;
	value: string;
};

export const InfoLine = memo(({ title, value }: infoLineProps) => {
	return (
		<div className='flex justify-between text-sm md:text-base items-end text-stone-100 space-y-8 w-auto h-auto border-b-2'>
			<h3>{title}</h3>
			<h3 className=''>{value}</h3>
		</div>
	);
});
