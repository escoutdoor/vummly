import { useEffect, useState } from 'react'
import s from './searchMenu.module.css'

const SearchMenu = ({ ingredients, setActiveSearch, addToShoppingList }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [activeMenu, setActiveMenu] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [foundIngredients, setFoundIngredients] = useState([])

	useEffect(() => {
		if (searchValue !== '' && ingredients?.find(i => i.toLowerCase().includes(searchValue.toLowerCase()))) {
			setFoundIngredients(ingredients?.filter(i => i.toLowerCase().includes(searchValue.toLowerCase())))
			setTimeout(() => setActiveMenu(true), 300)
		} else {
			setActiveMenu(false)
			setFoundIngredients([])
		}
	}, [searchValue])

	return (
		<div className={s.search}>
			<div className={s.searchbar}>
				<img className={s.icon} src={`${PF}images/icons/profile/searchGray.svg`} alt="searchIcon" />
				<input placeholder="Search Ingredients" className={s.input} onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text" />
				<img onClick={() => setActiveSearch(false)} className={s.icon} src={`${PF}images/icons/profile/x.svg`} alt="xIcon" />
			</div>
			<div className={activeMenu ? `${s.menu} ${s.active}` : s.menu}>
				{foundIngredients?.slice(0, 5)?.map((ingredient, index) => (
					<div key={index} className={s.menu__item} onClick={() => addToShoppingList({ ingredient: ingredient })}>
						<img className={s.icon} src={`${PF}images/icons/profile/plus-circle.svg`} alt="addIcon" />
						<h1 className={s.title}>{ingredient}</h1>
					</div>
				))}
			</div>
		</div>
	)
}

export default SearchMenu
