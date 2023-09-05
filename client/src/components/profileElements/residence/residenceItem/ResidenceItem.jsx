import { useEffect, useRef, useState } from 'react'
import s from './residenceItem.module.css'

const ResidenceItem = ({ check, value, setValue, title, active, setActive }) => {
	const input = useRef()

	useEffect(() => {
		if (active) {
			input.current.focus()
		}
	}, [active])

	return (
		<div className={s.residence__item}>
			<input
				ref={input}
				onBlur={() => {
					check()
					setActive('')
				}}
				placeholder={title}
				type="text"
				className={active ? `${s.edit__text} ${s.active}` : s.edit__text}
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<p
				onClick={() => {
					setActive(title)
				}}
				className={active ? `${s.text} ${s.active}` : s.text}
			>
				{value || title}
			</p>
		</div>
	)
}

export default ResidenceItem
