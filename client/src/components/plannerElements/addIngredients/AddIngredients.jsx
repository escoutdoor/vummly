import { useState } from 'react'
import s from './addIngredients.module.css'
import SearchIngredients from './searchIngredients/SearchIngredients'

const AddIngredients = ({ user, addToShoppingList, ingredients, suggestions }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [activeSearch, setActiveSearch] = useState(false)

	return (
		<div className={s.wrapper}>
			<div className={s.button} onClick={() => setActiveSearch(true)}>
				<img className={s.icon} src={`${PF}images/icons/profile/plus-circle.svg`} alt="plusCircle" />
				<h1 className={s.button__title}>Add Ingredients</h1>
			</div>
			<SearchIngredients
				suggestions={suggestions}
				list={ingredients}
				addToShoppingList={addToShoppingList}
				user={user}
				activeSearch={activeSearch}
				setActiveSearch={setActiveSearch}
			/>
		</div>
	)
}

export default AddIngredients
