import { useState } from 'react'
import s from './productDetails.module.css'

const ProductDetails = () => {
	const [quantity, setQuantity] = useState(1)

	const handleBlur = () => {
		if (quantity < 1) {
			setQuantity(1)
		}
	}

	return (
		<div className={s.details}>
			<h1 className={s.title}>The Vummly® Smart Thermometer</h1>
			<h1 className={s.price}>$99.99</h1>
			<div className={s.shopping}>
				<div className={s.product__quantity}>
					<button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className={s.button}>
						-
					</button>
					<input
						onBlur={handleBlur}
						min={1}
						max={100}
						type="number"
						value={quantity}
						onChange={e => setQuantity(e.target.value)}
						className={s.input}
					/>
					<button onClick={() => setQuantity(quantity + 1)} className={`${s.button} ${s.right}`}>
						+
					</button>
				</div>
				<button className={s.cart__button}>add to cart</button>
			</div>
			<div className={s.description}>
				<p className={`${s.text} ${s.gray}`}>Free shipping, 30-day return</p>
				<p className={s.text}>
					Make meat, poultry, and fish just the way you like it — every time — with this wireless thermometer
					for your oven, grill, stovetop, and smoker. With its three temperature sensors, it tracks your
					cooking from up to 150 feet away and sends alerts to your phone when your food is ready.
				</p>
				<p className={s.text}>
					Whether you're a seasoned home chef or a beginner, this digital meat thermometer helps you get the
					results you want. Just tap what you’re cooking, choose how well you'd like it done, and let the
					Bluetooth®-connected Yummly app keep an eye on your food!
				</p>
			</div>
		</div>
	)
}

export default ProductDetails
