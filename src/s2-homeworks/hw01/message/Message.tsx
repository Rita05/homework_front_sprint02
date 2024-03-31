import React from 'react'
import { MessageType } from '../HW1'
import s from './Message.module.css'

export type MessagePropsType = {
	message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
	const { user: { avatar, name }, message: { text, time } } = props.message;
	return (
		<div id={'hw1-message-' + props.message.id} className={s.message}>
			<div className={s.imageAndText}>
				<img
					id={'hw1-avatar-' + props.message.id}
					src={`${avatar}`}
				/>
				<div className={s.text}>
					<div id={'hw1-name-' + props.message.id} className={s.name}>
						{name}
					</div>
					<pre id={'hw1-text-' + props.message.id} className={s.messageText}>
						{text}
					</pre>
				</div>
			</div>
			<div id={'hw1-time-' + props.message.id} className={s.time}>
				{time}
			</div>
		</div>
	)
}

export default Message
