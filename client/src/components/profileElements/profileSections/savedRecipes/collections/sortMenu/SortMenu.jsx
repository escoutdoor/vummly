import { useState } from 'react'
import s from './sortMenu.module.css'

const SortMenu = ({ sortBy, setSortBy, active, setActive }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.menu} onClick={e => e.stopPropagation()}>
			<div onClick={() => setActive(!active)} className={s.menu__target}>
				<h1 style={{ color: '#bababa' }} className={s.title}>
					sort by
				</h1>
				<h1 className={s.title}>{sortBy}</h1>
				<img className={s.icon} src={`${PF}images/icons/recipes/chevron-down.svg`} alt="icon" />
			</div>
			<ul className={active ? `${s.dropdown} ${s.active}` : s.dropdown}>
				<li
					onClick={() => {
						setSortBy('last modified')
						setActive(false)
					}}
					className={sortBy === 'last modified' ? `${s.dropdown__item}  ${s.active}` : s.dropdown__item}
				>
					last modified
				</li>
				<li
					onClick={() => {
						setSortBy('collection name')
						setActive(false)
					}}
					className={sortBy === 'collection name' ? `${s.dropdown__item}  ${s.active}` : s.dropdown__item}
				>
					collection name
				</li>
				<li
					onClick={() => {
						setSortBy('last created')
						setActive(false)
					}}
					className={sortBy === 'last created' ? `${s.dropdown__item}  ${s.active}` : s.dropdown__item}
				>
					last created
				</li>
			</ul>
		</div>
	)
}

export default SortMenu
