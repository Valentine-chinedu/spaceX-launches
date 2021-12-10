import React from 'react';

type buttonProps = {
	name: string;
	// selected?: boolean;
	// clicked?: () => void;
	// disabled?: boolean;
	// styleType: string;
	// className?: string;
};

export const Button = React.memo(
	({
		name,
	}: // selected,
	// clicked,
	// disabled,
	// styleType,
	// className,
	buttonProps) => {
		return (
			<button
			// styleType={styleType}
			// selected={selected}
			// disabled={disabled}
			// className={className}
			// onClick={clicked}
			>
				{name}
			</button>
		);
	}
);
