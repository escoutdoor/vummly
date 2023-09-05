import { useEffect, useRef, useState } from 'react'
import s from './editDescription.module.css'

const EditDescription = ({ collection, update }) => {
	const [active, setActive] = useState(false)
	const [description, setDescription] = useState(collection.description)

	const input = useRef()

	const check = () => {
		if (collection.description !== description.trim() && description.length !== 0) {
			setActive(false)
			update({
				...collection,
				description,
			})
		} else {
			setActive(false)
		}
	}

	useEffect(() => {
		if (active) {
			input.current.focus()
		}
	}, [active])

	return (
		<div className={s.edit__description} onClick={() => setActive(true)}>
			<p className={active ? `${s.description} ${s.active}` : s.description}>
				{description || 'Tell us more about your collection.'}
			</p>
			<textarea
				maxLength={60}
				ref={input}
				className={active ? `${s.textarea} ${s.active}` : s.textarea}
				onBlur={() => check()}
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
		</div>
	)
}

export default EditDescription
