import s from './ingredientList.module.css'

const IngredientList = ({ list, action }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.list}>
			{list.map((item, index) => (
				<div key={index} className={s.list__item} onClick={() => action(item)}>
					<span className={s.ingredient}>{item}</span>
					<img className={s.icon} src={`${PF}images/icons/recipes/x.svg`} alt="" />
				</div>
			))}
		</div>
	)
}

export default IngredientList
