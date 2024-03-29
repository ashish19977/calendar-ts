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
import { TIconProps } from '../types';
import { FC } from 'react';

const Icon: FC<TIconProps> = (props) => {
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

	const iconName = getIcon(name);

	return isButton ? (
		<button {...extra} onClick={handleClick} className={className}>
			{iconName}
		</button>
	) : (
		<div {...extra} onClick={handleClick} className={className}>
			{iconName}
		</div>
	);
};

export default Icon;
