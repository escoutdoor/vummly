import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './searchMenu.module.css'

const SearchMenu = ({ active, setActive }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [searches, setSearches] = useState([])
	const [text, setText] = useState('')
	const nav = useNavigate()
	const input = useRef()

	useEffect(() => {
		active && input.current.focus()
	}, [active])

	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('search-history')) || []
		setSearches(storage?.slice(0, 5))
	}, [])

	const handleEnter = event => {
		event.key === 'Enter' && nav('/recipes', { state: { query: text } })
	}

	return (
		<div onClick={() => setActive(false)} className={active ? `${s.menu} ${s.active}` : s.menu}>
			<div onClick={e => e.stopPropagation()} className={s.menu__content}>
				<div className={s.menu__centered}>
					<div className={s.searchbar}>
						<img className={s.icon} src={`${PF}images/icons/profile/searchGray.svg`} alt="searchIcon" />
						<input
							ref={input}
							placeholder="Search recipes"
							type="text"
							className={s.input}
							value={text}
							onChange={e => setText(e.target.value)}
							onKeyDown={handleEnter}
						/>
					</div>
				</div>
				<div className={s.recentSearches}>
					<h1 className={s.title}>recent searches: </h1>
					<div className={s.list}>
						{searches?.map((item, index) => (
							<p
								key={index}
								onClick={() => nav('/recipes', { state: { query: item } })}
								className={s.list__item}>
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchMenu
