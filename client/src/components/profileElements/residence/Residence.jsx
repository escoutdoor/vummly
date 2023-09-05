import { useState } from 'react'
import s from './residence.module.css'
import ResidenceItem from './residenceItem/ResidenceItem'

const Residence = ({ user, update }) => {
	const [city, setCity] = useState(user.city)
	const [country, setCountry] = useState(user.country)
	const [active, setActive] = useState('')

	const check = () => {
		if (city !== user.city || country !== user.country) {
			update({
				...user,
				city,
				country,
			})
		}
	}

	return (
		<div className={s.residence}>
			<ResidenceItem
				value={city}
				setValue={setCity}
				check={check}
				title={'City'}
				active={active === 'City'}
				setActive={setActive}
			/>
			{', '}
			<ResidenceItem
				value={country}
				setValue={setCountry}
				check={check}
				title={'Country'}
				active={active === 'Country'}
				setActive={setActive}
			/>
		</div>
	)
}

export default Residence
