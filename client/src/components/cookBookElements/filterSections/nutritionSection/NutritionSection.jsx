import s from './nutritionSection.module.css'
import { nutrition as list } from '../../../../helpers/searchRecipe/filter'
import TypeOfNutrition from './typeOfNutrition/TypeOfNutrition'

const NutritionSection = ({ nutrition, setNutrition }) => {
	return (
		<div className={s.nutrition}>
			{list.map(item => (
				<TypeOfNutrition
					setNutrition={setNutrition}
					active={item.title === nutrition}
					title={item.title}
					description={item.desc}
					key={item.id}
				/>
			))}
		</div>
	)
}

export default NutritionSection
