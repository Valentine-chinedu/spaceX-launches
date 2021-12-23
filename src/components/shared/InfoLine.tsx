import React, { memo } from 'react';

type infoLineProps = {
	title: string;
	value: string;
};

export const InfoLine = memo(({ title, value }: infoLineProps) => {
	return (
		<div>
			<h3>{title}</h3>
			<h3>{value}</h3>
		</div>
	);
});
