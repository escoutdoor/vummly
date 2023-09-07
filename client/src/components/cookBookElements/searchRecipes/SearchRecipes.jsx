import s from './searchRecipes.module.css'

import { useEffect, useState } from 'react'
import ToolTipMenu from '../toolTipMenu/ToolTipMenu'

const SearchRecipes = ({ recipes, searchValue, setSearchValue, activeToolTip, setActiveToolTip }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.search__recipes} onClick={e => e.stopPropagation()}>
			<div className={s.content}>
				<div className={s.searchbar} onClick={() => setActiveToolTip(true)}>
					<img className={s.icon} src={`${PF}images/img/myFeed/searchIcon.svg`} alt="icon" />
					<input
						className={s.input}
						placeholder="Search recipes"
						onChange={e => setSearchValue(e.target.value)}
						value={searchValue}
						type="text"
					/>
				</div>
				<ToolTipMenu recipes={recipes} active={recipes.length !== 0 && searchValue && activeToolTip} />
			</div>
		</div>
	)
}

export default SearchRecipes
