import {
	CheckIcon,
	TrashIcon,
	MoonIcon,
	SunIcon,
	CheckBadgeIcon,
	PlusIcon,
	PencilSquareIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid';
import { TIconProps } from './types';
import { FC } from 'react';

export const Icon: FC<TIconProps> = (props) => {
	const { name, onClick, height = 20, width = 20, className = 'icon', isButton, extra = {} } = props;

	const getIcon = (name: string) => {
		switch (name) {
			case 'check':
				return <CheckIcon height={height} width={width} />;
			case 'pencil':
				return <PencilSquareIcon height={height} width={width} />;
			case 'moon':
				return <MoonIcon height={height} width={width} />;
			case 'sun':
				return <SunIcon height={height} width={width} />;
			case 'check-bedge':
				return <CheckBadgeIcon height={height} width={width} />;
			case 'trash':
				return <TrashIcon height={height} width={width} />;
			case 'x-mark':
				return <XMarkIcon height={height} width={width} />;
			case 'plus':
				return <PlusIcon height={height} width={width} />;
		}
	};

	const handleClick = () => {
		onClick && onClick();
	};

	return isButton ? (
		<button {...extra} className={className}>
			{getIcon(name)}
		</button>
	) : (
		<div {...extra} onClick={handleClick} className={className}>
			{getIcon(name)}
		</div>
	);
};
