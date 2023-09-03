import { Link } from 'react-router-dom'
import s from './navbar.module.css'
import { useScrollPosition } from '../../hooks/scrollPosition'

const Navbar = money => {
	const PF = process.env.REACT_APP_BASE_URL

	const scrollPos = useScrollPosition()

	return (
		<div className={s.navbar}>
			<h1 className={s.title}>smart thermometer</h1>
			<div className={s.centered}>
				<div className={scrollPos > 40 ? `${s.buttons} ${s.active}` : s.buttons}>
					<Link
						className={
							window.location.pathname === '/thermometer/overview' ? `${s.button} ${s.active}` : s.button
						}
						to={'/thermometer/overview'}
					>
						overview
					</Link>
					<Link className={s.button} to={'/support/categories/thermometer'}>
						support
					</Link>
				</div>
				<p className={scrollPos > 40 ? `${s.shipping} ${s.active}` : s.shipping}>
					FREE SHIPPING & FREE 30-DAY RETURN!
				</p>
			</div>
			<div className={s.right}>
				<div className={s.cart}>
					<h1 className={s.title}>$99.99</h1>
					<button className={s.cart__button}>add to cart</button>
					<img className={s.icon} src={`${PF}images/icons/navbar/cart-icon.webp`} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Navbar
