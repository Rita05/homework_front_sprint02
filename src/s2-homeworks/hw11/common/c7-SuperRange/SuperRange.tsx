import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
	return (
		<Slider
			sx={{ // стили для слайдера // пишет студент
				width: '147px',
				color: "#00CC22",
				'& .MuiSlider-thumb': {
					color: 'transparent',
					'&::after': {
						content: '""',
						display: 'block',
						width: '6px',
						height: '6px',
						backgroundColor: '#00CC22'
					},
					'&::before': {
						content: '""',
						width: '18px',
						height: '18px',
						display: 'block',
						border: '1px solid #00CC22'
					}
				}
			}}
			{...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
		/>
	)
}

export default SuperRange
