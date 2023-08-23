import { useState } from 'react'
import s from './searchBar.module.css'
import SearchMenu from '../searchMenu/SearchMenu'

const SearchBar = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const [active, setActive] = useState(false)

	return (
		<div className={s.searchbar}>
			<div className={s.searchbar__centred}>
				<button className={s.search__butt} onClick={() => setActive(true)}>
					<img className={s.icon} src={`${PF}images/icons/profile/searchGray.svg`} alt="searchIcon" />
					<h1 className={s.title}>search recipes</h1>
				</button>
			</div>
			<SearchMenu active={active} setActive={setActive} />
		</div>
	)
}

export default SearchBar
