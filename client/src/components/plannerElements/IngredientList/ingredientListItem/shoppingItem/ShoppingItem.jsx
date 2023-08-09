import { useEffect, useState } from 'react'
import s from './shoppingItem.module.css'
import EditQuantity from './editQuantity/EditQuantity'
import axios from 'axios'

const ShoppingItem = ({ ingredient, setIngredientsByRecipe, ingredientsByRecipe, deleteIngredient, user }) => {
	const PF = process.env.REACT_APP_BASE_URL

	const [active, setActive] = useState(false)
	const [hoveredX, setHoveredX] = useState(false)
	const [hoveredEdit, setHoveredEdit] = useState(false)

	const purchase = async () => {
		try {
			await axios
				.put(`/shopping/purchase/${user?._id}`, {
					ingredientId: ingredient?._id,
				})
				.then(i => {
					setIngredientsByRecipe(i.data)
				})
		} catch (error) {
			console.log('purchase error :', error)
		}
	}

	return (
		<div className={s.ingredient}>
			<div
				className={s.header}
				onClick={() => {
					purchase()
				}}>
				<div className={active ? `${s.header__left} ${s.active}` : s.header__left}>
					<div className={s.checkbox}>
						<input type="checkbox" className={s.checkbox__input} />
						<span className={ingredient.purchased ? `${s.display__check} ${s.active}` : s.display__check} />
					</div>
					<div className={ingredient.purchased ? `${s.details} ${s.purchased}` : s.details} title={ingredient?.name}>
						<p className={s.text}>{ingredient.quantity}</p>
						{ingredient.measurement ? (
							<p className={s.text} style={{ textTransform: 'none' }}>
								{ingredient.measurement}
							</p>
						) : null}
						<p className={s.text}>{ingredient.name}</p>
					</div>
				</div>
				<div className={s.actions} onClick={e => e.stopPropagation()}>
					<div className={active ? `${s.icons} ${s.active}` : s.icons}>
						<img
							className={s.icon}
							onClick={() => setActive(true)}
							onMouseOut={() => setHoveredEdit(false)}
							onMouseOver={() => setHoveredEdit(true)}
							src={`${PF}images/icons/planner/${hoveredEdit ? 'editActive' : 'edit'}.svg`}
							alt="editIcon"
						/>
						<img
							title="Delete"
							className={s.icon}
							onClick={() => deleteIngredient(ingredient)}
							onMouseOut={() => setHoveredX(false)}
							onMouseOver={() => setHoveredX(true)}
							src={`${PF}images/icons/planner/${hoveredX ? 'xActive' : 'x'}.svg`}
							alt="deleteIcon"
						/>
					</div>
					<EditQuantity
						active={active}
						setActive={setActive}
						ingredient={ingredient}
						ingredientsByRecipe={ingredientsByRecipe}
						setIngredientsByRecipe={setIngredientsByRecipe}
					/>
				</div>
			</div>
		</div>
	)
}

export default ShoppingItem
