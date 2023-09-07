import s from './suggestionMenu.module.css'

const SuggestionMenu = ({ action, ingredients, active }) => {
	return (
		<div className={active ? `${s.menu} ${s.active}` : s.menu}>
			{ingredients?.map((ingredient, index) => (
				<div key={index} onClick={() => action(ingredient)} className={s.menu__item}>
					<span className={s.plus}>+</span>
					<h1 className={s.ingredient}> {ingredient}</h1>
				</div>
			))}
		</div>
	)
}

export default SuggestionMenu
