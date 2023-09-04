import s from './footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className={s.footer}>
			<div className="wrap1160">
				<Link title="Home" to={'/support'}>
					<p className={s.title}>Yummly Help Center</p>
				</Link>
			</div>
		</div>
	)
}

export default Footer
