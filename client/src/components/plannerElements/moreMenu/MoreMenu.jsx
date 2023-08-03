import { Link, useNavigate } from 'react-router-dom'
import s from './moreMenu.module.css'
import { useState } from 'react'

const MoreMenu = ({ user, planner, clear, normal }) => {
	const nav = useNavigate()
	const PF = process.env.REACT_APP_BASE_URL
	const [active, setActive] = useState(false)

	return (
		<div className={s.more}>
			<img className={s.icon} style={{ width: normal ? '25px' : 'auto', height: normal ? '25px' : 'auto' }} onClick={() => setActive(!active)} src={`${PF}images/icons/planner/more.svg`} alt="dotsIcon" />
			<ul className={active ? `${s.menu} ${s.active}` : s.menu}>
				<li className={s.menu__item} onClick={() => nav('/meal-planner/ideas')}>
					add recipes
				</li>
				<li onClick={() => clear()} className={planner?.recipes?.length !== 0 ? s.menu__item : `${s.menu__item} ${s.inactive}`}>
					clear meal plan
				</li>
				<li onClick={() => nav(`/profile/${user?.name}-${user?._id}`)} className={s.menu__item}>
					taste preferences
				</li>
			</ul>
		</div>
	)
}

export default MoreMenu
