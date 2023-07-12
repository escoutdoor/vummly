import { Link, useNavigate } from 'react-router-dom'
import s from './moreMenu.module.css'

const MoreMenu = ({ user, planner, active, clear }) => {
	const nav = useNavigate()

	return (
		<ul className={active ? `${s.menu} ${s.active}` : s.menu}>
			<li className={s.menu__item} onClick={() => nav('ideas')}>
				add recipes
			</li>
			<li onClick={() => clear()} className={planner?.recipes?.length !== 0 ? s.menu__item : `${s.menu__item} ${s.inactive}`}>
				clear meal plan
			</li>
			<li onClick={() => nav(`/profile/${user?.name}-${user?._id}`)} className={s.menu__item}>
				taste preferences
			</li>
		</ul>
	)
}

export default MoreMenu
