import { useState } from 'react'
import s from './resourceHeader.module.css'
import { Link } from 'react-router-dom'

const ResourceHeader = ({ name }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [icon, setIcon] = useState('')

	return (
		<div className={s.header}>
			<div className={s.info}>
				<img className={s.icon} src={`${PF}images/icons/resource/pageIcon.png`} alt="icon" />
				<div className={s.details}>
					<h1 className={s.title}>{name}</h1>
					<p className={s.description}>
						{name}, it's what's cooking online! Over 100,000 recipes for any cuisine imaginable. For home
						cooks and gourmets alike.
					</p>
					<div className={s.socials}>
						<Link
							onMouseOut={() => setIcon('')}
							onMouseOver={() => setIcon('mail')}
							to={'mailto:vanap387@gmail.com'}
						>
							<img
								className={s.social}
								src={`${PF}images/icons/resource/${icon === 'mail' ? `${icon}Active.svg` : 'mail.svg'}`}
								alt="mail"
							/>
						</Link>
						<Link
							onMouseOut={() => setIcon('')}
							onMouseOver={() => setIcon('github')}
							to={'https://github.com/escoutdoor'}
						>
							<img
								className={s.social}
								src={`${PF}images/icons/resource/${
									icon === 'github' ? `${icon}Active.svg` : 'github.svg'
								}`}
								alt="github"
							/>
						</Link>
						<Link
							onMouseOut={() => setIcon('')}
							onMouseOver={() => setIcon('linkedin')}
							to={'https://www.linkedin.com/in/ivan-popov-015b61252/'}
						>
							<img
								className={s.social}
								src={`${PF}images/icons/resource/${
									icon === 'linkedin' ? `${icon}Active.svg` : 'linkedin.svg'
								}`}
								alt="linkedin"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResourceHeader
