import s from './footer.module.css'
import { Link } from 'react-router-dom'
import { footerTherm as navigation } from '../../../helpers/thermometer/footer'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<div className={s.footer}>
			<nav className={s.navigation}>
				{navigation.map(item => (
					<Link className={s.navigation__item} key={item.id} to={item.link}>
						{item.el}
					</Link>
				))}
			</nav>
			<h1 className={s.rights}>{year} Ivan Popov</h1>
			<p className={s.location}>Ukraine, Dnipro</p>
		</div>
	)
}

export default Footer
