import React from 'react'
import noneImg from './noneIcon.svg';
import downImg from './downIcon.svg';
import upImg from './upIcon.svg';

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
const downIcon = downImg;
const upIcon = upImg;
const noneIcon = noneImg;

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	switch (sort) {
		case '':
			return down;
		case down:
			return up;
		case up:
			return '';
		default:
			return down;
	}
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
	// return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
	{
		sort, value, onChange, id = 'hw15',
	}
) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))
	}

	const icon = sort === down
		? downIcon
		: sort === up
			? upIcon
			: noneIcon

	const SortContainerStyle = {
		display: 'flex',
		alignSelf: 'center'
	};

	return (
		<span
			id={id + '-sort-' + value}
			onClick={onChangeCallback}
			style={SortContainerStyle}
		>
			{/*сделать иконку*/}
			<img
				id={id + '-icon-' + sort}
				src={icon}
				alt="sort icon"
			/>
			{/* {icon} а это убрать */}
		</span>
	)
}

export default SuperSort

