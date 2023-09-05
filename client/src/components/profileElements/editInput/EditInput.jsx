import { useEffect, useRef, useState } from 'react'
import s from './editInput.module.css'

const EditInput = ({ user, update }) => {
	const [active, setActive] = useState(false)
	const [text, setText] = useState(user.name)
	const input = useRef()

	const check = () => {
		if (text !== user.name && text.length !== 0) {
			setActive(false)
			update({
				...user,
				name: text,
			})
		}
	}

	useEffect(() => {
		if (active) {
			input.current.focus()
		}
	}, [active])

	return (
		<div className={s.edit__input}>
			<h1 onClick={() => setActive(true)} className={active ? `${s.name} ${s.active}` : s.name}>
				{user.name}
			</h1>
			<input
				ref={input}
				onBlur={() => check()}
				type="text"
				value={text || ''}
				className={active ? `${s.input} ${s.active}` : s.input}
				onChange={e => setText(e.target.value)}
			/>
		</div>
	)
}

export default EditInput
