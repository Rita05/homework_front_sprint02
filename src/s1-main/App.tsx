import React from 'react'


//styles
import s from './App.module.css'

//components
import HW5 from '../s2-homeworks/hw05/HW5'

function App() {
	return (
		<div className={s.App}>

			{/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
			<HW5 />
		</div>
	)
}

export default App
