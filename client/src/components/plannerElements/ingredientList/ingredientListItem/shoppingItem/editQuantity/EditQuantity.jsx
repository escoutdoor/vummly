import axios from 'axios'
import s from './editQuantity.module.css'
import { useEffect, useState } from 'react'

const EditQuantity = ({ ingredient, active, setActive, changeQuantity }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [value, setValue] = useState(ingredient.quantity)

	const handleChange = () => {
		if (ingredient.quantity !== value) {
			changeQuantity(ingredient._id, value)
		}
	}

	useEffect(() => {
		handleChange()
	}, [value])

	return (
		<div className={active ? `${s.menu} ${s.active}` : s.menu}>
			<div className={s.header} onClick={() => setActive(false)}>
				<p className={s.text}>{ingredient.quantity}</p>
				{ingredient.measurement ? <p className={s.text}>{ingredient.measurement}</p> : null}
				<p className={s.text}>{ingredient.name}</p>
			</div>
			<div className={s.editMenu}>
				<p className={s.text}>change quantity:</p>
				<input className={s.input} min={1} max={100} value={value} onChange={e => setValue(e.target.value)} type="number" />
				<button
					onClick={() => {
						value <= 0 && setValue(1)
						setActive(false)
						value > 100 && setValue(100)
					}}
					className={s.button}>
					Done
				</button>
			</div>
		</div>
	)
}

export default EditQuantity
