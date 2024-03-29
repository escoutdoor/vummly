import s from './navbar.module.css'
import { Link } from 'react-router-dom'

const SuppNavbar = () => {
	const PF = process.env.REACT_APP_BASE_URL
	return (
		<div className={s.navbar}>
			<div className="wrap1160">
				<Link to={'/support'}>
					<img src={`${PF}images/logo/yummlyLogo.svg`} alt="YummlyLogo" />
				</Link>
			</div>
		</div>
	)
}

export default SuppNavbar
