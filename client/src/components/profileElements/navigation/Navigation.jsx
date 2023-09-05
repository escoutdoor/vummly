import s from './navigation.module.css'

const Navigation = ({ section, setSection }) => {
	return (
		<ul className={s.navbar}>
			<li
				onClick={() => setSection('saved recipes')}
				className={section === 'saved recipes' ? `${s.navbar__item} ${s.active}` : s.navbar__item}
			>
				saved recipes
			</li>
			<li
				onClick={() => setSection('preferences')}
				className={section === 'preferences' ? `${s.navbar__item} ${s.active}` : s.navbar__item}
			>
				preferences
			</li>
			<li
				onClick={() => setSection('settings')}
				className={section === 'settings' ? `${s.navbar__item} ${s.active}` : s.navbar__item}
			>
				settings
			</li>
		</ul>
	)
}

export default Navigation
