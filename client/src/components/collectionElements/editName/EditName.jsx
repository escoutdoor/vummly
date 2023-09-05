import { useEffect, useRef, useState } from 'react'
import s from './editName.module.css'

const EditName = ({ collection, update }) => {
	const [active, setActive] = useState(false)
	const [name, setName] = useState(collection.name)

	const input = useRef()

	const check = () => {
		if (collection.name !== name.trim() && name.length !== 0) {
			setActive(false)
			update({
				...collection,
				name,
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
		<div className={s.edit__name} onClick={() => setActive(true)}>
			<p className={active ? `${s.name} ${s.active}` : s.name}>{collection.name}</p>
			<input
				onBlur={() => check()}
				maxLength={40}
				ref={input}
				className={active ? `${s.input} ${s.active}` : s.input}
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
		</div>
	)
}

export default EditName
