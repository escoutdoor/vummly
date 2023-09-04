import s from './searchInput.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchInput = ({ breadcrumbs, title, text, setText }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const navigate = useNavigate()

	const [searchVal, setSearchVal] = useState(text || '')

	const handleEnter = event => {
		event.key === 'Enter' &&
			navigate(`${searchVal !== '' ? '/support/search' : ''}`, { state: { data: searchVal } })
	}

	return (
		<div className={s.searchBar}>
			<div className={s.searchBar__breadcrumbs}>
				<Link data-end={'>'} className={s.searchBar__link} to={'/support'}>
					Vummly Help Center
				</Link>
				{breadcrumbs && (
					<Link to={`/support/${breadcrumbs.categoryId}`}>
						<p data-end={'>'} className={s.searchBar__link}>
							{breadcrumbs.categoryName}
						</p>
					</Link>
				)}
				{title && title}
			</div>
			<div className={s.searchBar__search}>
				<Link
					className={s.searchIcon}
					to={searchVal !== null ? '/support/search' : ''}
					state={{ data: searchVal }}
				>
					<img src={`${PF}images/icons/arrows/support/search.svg`} alt="" />
				</Link>
				<input
					onKeyDown={handleEnter}
					onChange={e => {
						setSearchVal(e.target.value)
						setText && setText(e.target.value)
					}}
					value={searchVal}
					className={s.search}
					type="search"
					placeholder="Search"
				/>
			</div>
		</div>
	)
}

export default SearchInput
