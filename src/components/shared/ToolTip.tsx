import React, { useState } from 'react';

type TooltipProps = {
	content: string;
	children: React.ReactNode;
	delay?: number;
};

const ToolTip = ({ content, children, delay }: TooltipProps) => {
	let timeout: NodeJS.Timeout;
	const [showTooltip, setShowTooltip] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setShowTooltip(true);
		}, delay || 100);
	};
	const hideTip = () => {
		clearInterval(timeout);
		setShowTooltip(false);
	};
	return (
		<div
			className='relative flex justify-center'
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{children}
			{showTooltip && (
				<div className='absolute z-40 -top-20 rounded-lg text-center p-2 shadow-sm'>
					{content}
				</div>
			)}
		</div>
	);
};

export default ToolTip;
