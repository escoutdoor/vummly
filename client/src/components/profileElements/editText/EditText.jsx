import s from './editText.module.css'
import { useEffect, useRef, useState } from 'react'

const EditText = ({ user, update }) => {
	const [active, setActive] = useState(false)
	const [text, setText] = useState(user.description)
	const textarea = useRef()

	const check = () => {
		if (text !== user.description) {
			setActive(false)
			update({
				...user,
				description: text,
			})
		} else {
			setActive(false)
		}
	}

	useEffect(() => {
		if (active) {
			textarea.current.focus()
		}
	}, [active])

	return (
		<div className={s.edit__text}>
			<p onClick={() => setActive(true)} className={!active ? `${s.text} ${s.active}` : s.text}>
				{user?.description || 'Tell us about yourself here'}
			</p>
			<div className={active ? `${s.description} ${s.active}` : s.description}>
				<textarea
					ref={textarea}
					onBlur={() => check()}
					value={text}
					placeholder="Tell us about yourself here"
					className={s.textarea}
					maxLength={80}
					onChange={e => setText(e.target.value)}
				/>
				<span className={s.counter}>{`${text?.length}/80`}</span>
			</div>
		</div>
	)
}

export default EditText
