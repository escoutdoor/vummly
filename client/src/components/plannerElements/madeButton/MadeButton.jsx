import { useState } from 'react'
import s from './madeButton.module.css'

const MadeButton = ({ remove, recipeId }) => {
	const [checked, setChecked] = useState(false)

	return (
		<div
			className={s.madeIt}
			onClick={() => {
				setChecked(!checked)
				remove(recipeId)
			}}>
			<div className={s.checkbox}>
				<input type="checkbox" className={s.checkbox__input} />
				<span className={checked ? `${s.display__check} ${s.active}` : s.display__check} />
			</div>
			<h1 className={s.madeIt__title}>Made it</h1>
		</div>
	)
}

export default MadeButton
