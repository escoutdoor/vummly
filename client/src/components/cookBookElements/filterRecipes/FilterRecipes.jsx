import s from './filterRecipes.module.css'
import { useState } from 'react'
import SortingBar from '../sortingBar/SortingBar'
import FilterNavigation from '../filterNavigation/FilterNavigation'
import IngredientsSection from '../filterSections/ingredientsSection/IngredientsSection'
import NutritionSection from '../filterSections/nutritionSection/NutritionSection'
import TimeSection from '../filterSections/timeSection/TimeSection'

const FilterRecipes = ({
	ingredients,
	allowedIngredients,
	setAllowedIngredients,
	bannedIngredients,
	setBannedIngredients,
	nutrition,
	setNutrition,
	time,
	setTime,
	sortBy,
	setSortBy,
}) => {
	const [activeFilter, setActiveFilter] = useState(false)
	const [activeMenu, setActiveMenu] = useState(false)
	const [activeTab, setActiveTab] = useState('ingredients')

	const resetAll = () => {
		setAllowedIngredients([])
		setBannedIngredients([])
		setNutrition([])
		setTime([])
	}

	return (
		<div className={s.filter} onClick={() => setActiveMenu(false)}>
			<SortingBar
				resetAll={resetAll}
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				activeMenu={activeMenu}
				setActiveMenu={setActiveMenu}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<div className={s.filter__container}>
				<FilterNavigation
					activeFilter={activeFilter}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					tabs={[
						'ingredients',
						'tastes',
						'diets',
						'allergies',
						'nutrition',
						'techniques',
						'cuisines',
						'time',
					]}
				/>
				<div className={activeFilter ? `${s.section} ${s.active}` : s.section}>
					{activeTab === 'ingredients' && (
						<IngredientsSection
							allowedIngredients={allowedIngredients}
							setAllowedIngredients={setAllowedIngredients}
							bannedIngredients={bannedIngredients}
							setBannedIngredients={setBannedIngredients}
							ingredients={ingredients.filter(
								ingredient =>
									!bannedIngredients.find(ing => ing === ingredient) &&
									!allowedIngredients.find(ing => ing === ingredient)
							)}
						/>
					)}
					{activeTab === 'nutrition' && (
						<NutritionSection nutrition={nutrition} setNutrition={setNutrition} />
					)}
					{activeTab === 'time' && (
						<TimeSection time={time} setTime={setTime} minutes={[5, 10, 15, 20, 30, 45, 60, 120]} />
					)}
				</div>
			</div>
		</div>
	)
}
export default FilterRecipes
