import { useState } from 'react'
import s from './ingredientsSection.module.css'
import SectionInput from './sectionInput/SectionInput'
import SuggestionMenu from './suggestionMenu/SuggestionMenu'
import IngredientList from './ingredientList/IngredientList'

const IngredientsSection = ({
	allowedIngredients,
	setAllowedIngredients,
	bannedIngredients,
	setBannedIngredients,
	ingredients,
}) => {
	const [allowedInputText, setAllowedInputText] = useState('')
	const [bannedInputText, setBannedInputText] = useState('')

	const addToAllowedIngredients = ingredient => {
		setAllowedIngredients([...allowedIngredients, ingredient])
	}

	const addToBannedIngredients = ingredient => {
		setBannedIngredients([...bannedIngredients, ingredient])
	}

	const removeFromAllowedIngredients = ingredient => {
		setAllowedIngredients(allowedIngredients.filter(i => i !== ingredient))
	}

	const removeFromBannedIngredients = ingredient => {
		setBannedIngredients(bannedIngredients.filter(i => i !== ingredient))
	}

	return (
		<div className={s.section}>
			<div className={s.section__item}>
				<SectionInput placeholder={'With Ingredients'} text={allowedInputText} setText={setAllowedInputText} />
				<SuggestionMenu
					action={addToAllowedIngredients}
					ingredients={ingredients
						.filter(ingredient => ingredient.toLowerCase().includes(allowedInputText.toLowerCase()))
						.slice(0, 6)}
					active={allowedInputText ? true : false}
				/>
				<IngredientList list={allowedIngredients} action={removeFromAllowedIngredients} />
			</div>
			<div className={s.section__item}>
				<SectionInput placeholder={'Without Ingredients'} text={bannedInputText} setText={setBannedInputText} />
				<SuggestionMenu
					action={addToBannedIngredients}
					ingredients={ingredients
						.filter(ingredient => ingredient.toLowerCase().includes(bannedInputText.toLowerCase()))
						.slice(0, 6)}
					active={bannedInputText ? true : false}
				/>
				<IngredientList list={bannedIngredients} action={removeFromBannedIngredients} />
			</div>
		</div>
	)
}

export default IngredientsSection
