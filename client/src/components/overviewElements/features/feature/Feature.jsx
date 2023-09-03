import s from './feature.module.css'

const Feature = ({ feature }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.feature}>
			<img className={s.icon} src={`${PF}images/icons/features/` + feature.img} alt="featureIcon" />
			<div className={s.text}>
				<h1 className={s.title}>{feature.title}</h1>
				<p className={s.description}>{feature.desc}</p>
			</div>
		</div>
	)
}

export default Feature
