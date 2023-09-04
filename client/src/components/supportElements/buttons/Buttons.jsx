import { Link } from 'react-router-dom'
import s from './buttons.module.css'

const Buttons = ({ buttons }) => {
	return (
		<div className={s.list}>
			{buttons.map(button => (
				<Link key={button.id} to={`categories/${button.link}`}>
					<button className={s.list__item}>{button.title}</button>
				</Link>
			))}
		</div>
	)
}

export default Buttons
