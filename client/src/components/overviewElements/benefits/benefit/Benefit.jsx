import s from './benefit.module.css'

const Benefit = ({ benefit }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.benefit} style={{ flexDirection: `${benefit.flexDir}` }}>
			<img className={s.benefit__image} src={`${PF}` + benefit.img} alt="advanatageImg" />
			<div className={s.benefit__text}>
				<span className={s.benefit__made}>{benefit.madefor}</span>
				<h1 className={s.title}>{benefit.title}</h1>
				<p className={s.description}>{benefit.description}</p>
				<p className={s.benefit__extra}>{benefit.extra}</p>
				{benefit.details ? <p className={s.benefit__details}>{benefit.details}</p> : null}
			</div>
		</div>
	)
}

export default Benefit
