import Benefit from './benefit/Benefit'
import s from './benefits.module.css'

const Benefits = ({ benefits }) => {
	return (
		<div className={s.benefits}>
			{benefits.map(benefit => (
				<Benefit key={benefit.id} benefit={benefit} />
			))}
		</div>
	)
}

export default Benefits
