import s from './banner.module.css'

const Banner = () => {
	return (
		<div className={s.banner}>
			<div className={s.container}>
				<h1 className={s.title}>take the guesswork out of cooking</h1>
				<button className={s.button}>add to cart</button>
			</div>
		</div>
	)
}

export default Banner
