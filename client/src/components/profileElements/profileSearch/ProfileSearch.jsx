import { Link } from 'react-router-dom'
import s from './profileSearch.module.css'
import SearchMenu from './searchMenu/SearchMenu'
import { useEffect, useState } from 'react'

const ProfileSearch = ({ recipes }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [text, setText] = useState('')
	const [active, setActive] = useState(false)

	const handleText = value => {
		setText(value)
		if (value.trim().length !== 0) {
			setActive(true)
		} else {
			setActive(false)
		}
	}

	return (
		<div className={s.search}>
			<div className={s.search__bar}>
				<img className={s.icon} src={`${PF}images/icons/recipes/search.svg`} alt="" />
				<input
					value={text}
					onChange={e => handleText(e.target.value)}
					placeholder="Search My Vums"
					type="text"
					className={s.input}
				/>
			</div>
			<SearchMenu
				recipes={recipes.filter(r => r.title.toLowerCase().includes(text.toLowerCase()))?.slice(0, 7)}
				active={active}
			/>
		</div>
	)
}

export default ProfileSearch
