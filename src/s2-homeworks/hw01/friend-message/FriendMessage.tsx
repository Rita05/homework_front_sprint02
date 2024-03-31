import React from 'react'
import { MessageType } from '../HW1'
import s from './FriendMessage.module.css'


export type FriendMessagePropsType = {
	message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
	const { user: { avatar, name }, message: { text, time } } = props.message;
	return (
		<div
			id={'hw1-friend-message-' + props.message.id}
			className={s.friendMessage}
		>
			<div className={s.friendImageAndText}>
				<img
					id={'hw1-friend-avatar-' + props.message.id}
					src={`${avatar}`}
				/>
				<div className={s.friendText}>
					<div
						id={'hw1-friend-name-' + props.message.id}
						className={s.friendName}
					>
						{name}
					</div>
					<pre
						id={'hw1-friend-text-' + props.message.id}
						className={s.friendMessageText}
					>
						{text}
					</pre>
				</div>
			</div>
			<div
				id={'hw1-friend-time-' + props.message.id}
				className={s.friendTime}
			>
				{time}
			</div>
		</div >
	)
}

export default FriendMessage
