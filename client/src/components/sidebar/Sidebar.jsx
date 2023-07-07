import s from './sidebar.module.css'
import { useEffect, useState } from 'react'
import { list, about, privacy } from './../../helpers/thermometer/sidebar'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../redux/features/userSlice'

const Sidebar = ({ setActive, activeLoginModal, hidden, setHidden }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const location = useLocation()
	const path = decodeURIComponent(location.pathname)

	const [selected, setSelected] = useState('')
	const [activeAbout, setActiveAbout] = useState(false)

	const user = useSelector(selectUser)

	const year = new Date().getFullYear()

	useEffect(() => {
		setSelected(list.find(l => l.dropdown?.find(d => d.link === path))?.title)
	}, [location.pathname])

	const fetch = async () => {
		await axios.get(`/collections/getAll/${user._id}`).then(collections => {
			list.find(l => l.title === 'Saved Recipes').dropdown = collections.data.map(c => {
				return {
					label: c.name,
					link: `/profile/${user.name}-${user._id}/collections/${c.name}`,
				}
			})
		})
	}

	useEffect(() => {
		if (user) {
			fetch()
		}
	}, [user])

	useEffect(() => {
		if (location.pathname === '/meal-planner/ideas') {
			setHidden(true)
		} else {
			setHidden(false)
		}
	}, [location.pathname])

	return (
		<div className={!hidden ? s.sidebar : `${s.sidebar} ${s.hidden}`}>
			<div className={s.header}>
				<Link to={'/'}>
					<img src={`${PF}images/logo/yummlyLogo.svg`} alt="logoIcon" />
				</Link>
				{user?._id ? (
					<Link to={`/profile/${user.name}-${user?._id}`}>
						{user.avatar ? <img className={s.avatar} src={`${PF}images/avatars/${user.avatar}`} alt="avatar" /> : <img className={s.avatar} src={`${PF}images/avatars/no-avatar.webp`} alt="avatar" />}
					</Link>
				) : (
					<button onClick={() => setActive(true)} className={s.loginButton}>
						Sign Up / Log In
					</button>
				)}
			</div>
			<div className={s.list}>
				{list.map(item => (
					<div className={s.list__item} key={item.id}>
						<div
							title={item.title}
							className={s.list__itemTarget}
							onClick={() => {
								setSelected(selected === item.title ? '' : item.title)
								setActiveAbout(false)
							}}>
							{<h1 className={selected === item.title ? `${s.title} ${s.active}` : s.title}>{item.title}</h1>}
							{item.dropdown && (
								<img className={s.arrow} src={selected === item.title ? `${PF}images/icons/arrows/sidebar/downLightGreen.svg` : `${PF}images/icons/arrows/sidebar/rightLightGreen.svg`} alt="rightArrow/downArrow" />
							)}
						</div>
						<div className={selected === item.title ? `${s.dropdown} ${s.active}` : s.dropdown}>
							{item.dropdown &&
								item.dropdown.map((d, index) => (
									<Link title={d.label} style={{ color: d.link === path && '#3a9691' }} key={index} to={d.link} className={selected === item.title ? `${s.subtitle} ${s.active}` : s.subtitle}>
										{d.label}
									</Link>
								))}
						</div>
					</div>
				))}
			</div>
			<div className={s.footer}>
				<div className={s.about}>
					<div
						title={'About Vummly'}
						className={activeAbout ? `${s.aboutTarget} ${s.active}` : s.aboutTarget}
						onClick={() => {
							setActiveAbout(!activeAbout)
							setSelected('')
						}}>
						<h1 className={s.title}>About Vummly</h1>
						<img className={s.arrow} src={activeAbout ? `${PF}images/icons/arrows/sidebar/downLightGreen.svg` : `${PF}images/icons/arrows/sidebar/rightLightGreen.svg`} alt="rightArrow/downArrow" />
					</div>
					<div className={activeAbout ? `${s.aboutList} ${s.active}` : s.aboutList}>
						{about.map((a, index) => (
							<Link title={a.label} style={{ color: a.link === path && '#3a9691' }} key={index} to={a.link} className={activeAbout ? `${s.subtitle} ${s.active}` : s.subtitle}>
								{a.label}
							</Link>
						))}
					</div>
				</div>
				<ul className={s.docs}>
					{privacy.map((p, index) => (
						<li key={index} className={s.docs__item} title={p.label}>
							<Link to={p.link}>{p.label}</Link>
						</li>
					))}
				</ul>
				<p className={s.rights}>®/™${year} Vummly. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Sidebar
