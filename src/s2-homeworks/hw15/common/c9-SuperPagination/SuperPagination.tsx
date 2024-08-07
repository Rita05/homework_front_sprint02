import React, { ChangeEvent } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination, SxProps } from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
	id?: string
	page: number
	itemsCountForPage: number
	totalCount: number
	onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
	{
		page, itemsCountForPage, totalCount, onChange, id = 'hw15',
	}
) => {
	// const lastPage = 10 // пишет студент // вычислить количество страниц

	const lastPage = Math.ceil(totalCount / itemsCountForPage);

	const onChangeCallback = (event: any, page: number) => {
		// пишет студент
		onChange(page, itemsCountForPage);
	}

	const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		// пишет студент
		const newItemsCountForPage = Number(event.target.value);
		onChange(1, newItemsCountForPage);
	}

	const getPaginationSX = (): SxProps => ({
		'& .MuiButtonBase-root': {
			backgroundColor: 'transparent'
		},

		'& .MuiButtonBase-root.Mui-selected': {
			borderRadius: '2px',
			backgroundColor: 'rgb(0, 102, 204)'
		},
	})


	return (
		<div className={s.pagination}>
			<Pagination
				id={id + '-pagination'}
				sx={
					// стили для Pagination // пишет студент
					getPaginationSX()
				}
				page={page}
				count={lastPage}
				onChange={onChangeCallback}
				hideNextButton
				hidePrevButton
			/>

			<span className={s.text1}>
				показать
			</span>

			<SuperSelect
				id={id + '-pagination-select'}
				value={itemsCountForPage}
				options={[
					{ id: 4, value: 4 },
					{ id: 7, value: 7 },
					{ id: 10, value: 10 },
				]}
				onChange={onChangeSelect}
			/>

			<span className={s.text2}>
				строк в таблице
			</span>
		</div>
	)
}

export default SuperPagination
