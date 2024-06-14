import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'

//types
import { changeThemeId } from './bll/themeReducer'
import { AppStoreType } from '../hw10/bll/store'

//styles
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
	{ id: 1, value: 'light' },
	{ id: 2, value: 'blue' },
	{ id: 3, value: 'dark' },
]

const HW12 = () => {

	const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId);

	const dispatch = useDispatch();

	const change = (id: number) => {
		dispatch(changeThemeId(id));
	}

	useEffect(() => {
		document.documentElement.dataset.theme = themeId + ''
	}, [themeId])

	const selectClasses = s2.hw + ' ' + s.superSelectSection;

	return (
		<div id={'hw12'} className={s2.themeContainer}>
			<div id={'hw12-text'} className={s2.hwTitle}>
				Homework #12
			</div>

			<div className={selectClasses}>
				<span className={s.selectLabel}>Выберите тему</span>
				<SuperSelect
					id={'hw12-select-theme'}
					className={s.select}
					value={themeId}
					options={themes}
					onChangeOption={change}
				/>
			</div>
		</div>
	)
}

export default HW12
