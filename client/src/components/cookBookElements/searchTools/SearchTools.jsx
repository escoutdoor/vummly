import { useState } from 'react'
import SearchRecipes from '../searchRecipes/SearchRecipes'
import s from './searchTools.module.css'
import FilterRecipes from '../filterRecipes/FilterRecipes'

const SearchTools = ({
	recipes,
	searchValue,
	setSearchValue,
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
	activeToolTip,
	setActiveToolTip,
}) => {
	return (
		<div className={s.tools}>
			<SearchRecipes
				activeToolTip={activeToolTip}
				setActiveToolTip={setActiveToolTip}
				recipes={recipes
					.filter(
						recipe =>
							recipe.tags.find(tag => tag.toLowerCase().includes(searchValue.toLowerCase())) ||
							recipe.title.toLowerCase().includes(searchValue.toLowerCase()) ||
							recipe.resource.name.toLowerCase().includes(searchValue.toLowerCase())
					)
					.slice(0, 7)}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<FilterRecipes
				ingredients={recipes
					.flatMap(r => r.ingredients.us.map(i => i.ingredient))
					.filter((value, index, array) => array.indexOf(value) === index)}
				allowedIngredients={allowedIngredients}
				setAllowedIngredients={setAllowedIngredients}
				bannedIngredients={bannedIngredients}
				setBannedIngredients={setBannedIngredients}
				nutrition={nutrition}
				setNutrition={setNutrition}
				time={time}
				setTime={setTime}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
		</div>
	)
}

export default SearchTools
