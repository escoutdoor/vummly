import s from './sortingBar.module.css'
import { useState } from 'react'
import SortMenu from '../../sortMenu/SortMenu'

const SortingBar = ({ activeFilter, setActiveFilter, activeMenu, setActiveMenu, sortBy, setSortBy, resetAll }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.sortingbar}>
			<div className={s.sortingbar__left}>
				<h1 onClick={() => setActiveFilter(!activeFilter)} className={s.title}>
					Filter
				</h1>
				<h1 onClick={() => resetAll()} className={`${s.title} ${s.reset}`}>
					Reset
				</h1>
			</div>
			<SortMenu
				sortBy={sortBy}
				setSortBy={setSortBy}
				active={activeMenu}
				setActive={setActiveMenu}
				options={['relevance', 'popular', 'quick & easy']}
			/>
		</div>
	)
}

export default SortingBar
