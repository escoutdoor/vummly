import s from './typeOfNutrition.module.css'

const TypeOfNutrition = ({ title, description, active, setNutrition }) => {
	return (
		<div
			onClick={() => (!active ? setNutrition(title) : setNutrition(''))}
			className={active ? `${s.item} ${s.active}` : s.item}
		>
			<h3 className={s.title}>{title}</h3>
			<span className={s.description}>{description}</span>
		</div>
	)
}

export default TypeOfNutrition
