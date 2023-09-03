import Feature from './feature/Feature'
import s from './features.module.css'

const Features = ({ features, title, bigTitle }) => {
	return (
		<div className={s.features}>
			<div className={s.header}>
				<span className={s.title}>{title}</span>
				<h1 className={s.bigTitle}>{bigTitle}</h1>
			</div>
			<div className={s.list}>
				{features.map(feature => (
					<Feature key={feature.id} feature={feature} />
				))}
			</div>
		</div>
	)
}

export default Features
