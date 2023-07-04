import { Link } from 'react-router-dom'
import './navbar.css'
import { useScrollPosition } from '../../hooks/scrollPosition'

const Navbar = money => {
	const PF = process.env.REACT_APP_BASE_URL
	const price = [
		{
			now: '79.99',
			was: '99.99',
		},
	]

	const scrollPos = useScrollPosition()

	return (
		<div className="navbar">
			<div className="navbar-container">
				<Link to={'/thermometer/overview'}>
					<h1 className="navbar__title">SMART THERMOMETER</h1>
				</Link>
				<ul className={scrollPos < 40 ? 'navbar__buttons' : 'navbar__buttons hide'}>
					<Link title="Overview" className={money.value ? 'navbar__buttons-item selected' : 'navbar__buttons-item'} to={'/thermometer/overview'}>
						<li>Overview</li>
					</Link>
					<Link title="Support" className="navbar__buttons-item" to={'/support/categories/thermometer'}>
						<li>Support</li>
					</Link>
				</ul>
				<p className={scrollPos < 40 ? 'shipping' : 'shipping show'}>FREE SHIPPING & FREE 30-DAY RETURN!</p>
				{money.value ? (
					<div className="navbar__addTocart">
						{price.map((i, index) => (
							<div className="addTocart__price" key={index}>
								<h1>${i.now}</h1>
								<p>Was ${i.was}</p>
							</div>
						))}
						<Link to={'/addtoCart'}>
							<div className="addToCart__buttons">
								<button title="Add to Cart" className="addTocart__butt">
									Add to cart
								</button>
								<div className="addTocart__cart">
									<img className="cartImg" src={`${PF}images/icons/navbar/cart-icon.webp`} alt="" />
									{money.badge ? <span className="activeBadge"></span> : null}
								</div>
							</div>
						</Link>
					</div>
				) : (
					<div className="navbar__addTocart"></div>
				)}
			</div>
		</div>
	)
}

export default Navbar
