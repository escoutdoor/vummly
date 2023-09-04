import s from './support.module.css'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { navigation } from '../../helpers/help/support'
import Modal from '../../components/supportElements/modal/Modal'
import Buttons from '../../components/supportElements/buttons/Buttons'

const Support = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const navigate = useNavigate()
	const location = useLocation()
	const [searchValue, setSearchValue] = useState(null)

	const [sent, setSent] = useState(location.state?.sent)
	window.history.replaceState({}, document.title)

	useEffect(() => {
		document.title = 'Vummly Help Center'
	}, [document.title])

	useEffect(() => {
		setTimeout(() => setSent(false), 5000)
	}, [])

	const handleEnter = event => {
		event.key === 'Enter' &&
			navigate(`${searchValue !== null ? '/support/search' : ''}`, { state: { data: searchValue } })
	}

	return (
		<>
			{sent && <Modal sent={sent} />}
			<div className={s.support}>
				<div className={s.container}>
					<div className={s.support__search}>
						<div className={s.search__content}>
							<Link
								className={s.icon}
								to={searchValue !== null ? '/support/search' : ''}
								state={{ data: searchValue }}
							>
								<img src={`${PF}images/icons/arrows/support/search.svg`} alt="" />
							</Link>
							<input
								onKeyDown={handleEnter}
								onChange={e => setSearchValue(e.target.value)}
								type="search"
								placeholder="Search"
								className={s.input}
							/>
						</div>
					</div>
					<div className="wrap1160">
						<Buttons buttons={navigation} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Support
