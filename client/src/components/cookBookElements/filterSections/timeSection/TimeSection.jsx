import CookingTime from './cookingTime/CookingTime'
import s from './timeSection.module.css'

const TimeSection = ({ time, setTime, minutes }) => {
	return (
		<div className={s.time}>
			<span className={s.title}>Cooking time, less than:</span>
			<ul className={s.buttons}>
				{minutes.map((item, index) => (
					<CookingTime key={index} item={item} setTime={setTime} active={item === time} />
				))}
			</ul>
		</div>
	)
}

export default TimeSection
