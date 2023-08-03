import { useState } from 'react'
import s from './shoppingListActions.module.css'

const ShoppingListActions = ({ clearList, uncheckAll }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [active, setActive] = useState(false)

	return (
		<div className={s.actions}>
			<img onClick={() => setActive(!active)} className={s.icon} src={`${PF}images/icons/planner/more.svg`} alt="dotsIcon" />
			<ul className={active ? `${s.menu} ${s.active}` : s.menu}>
				<li className={s.menu__item} onClick={() => uncheckAll()}>
					uncheck all
				</li>
				<li className={s.menu__item} onClick={() => clearList()}>
					clear list
				</li>
			</ul>
		</div>
	)
}

export default ShoppingListActions
