import { useEffect, useState } from 'react'
import s from './preferences.module.css'
import Diets from './diets/Diets'
import Allergies from './allergies/Allergies'
import Disliked from './disliked/Disliked'
import Goals from './goals/Goals'
import axios from 'axios'

const Preferences = ({ user }) => {
	const [active, setActive] = useState('')
	const [diets, setDiets] = useState([])
	const [allergies, setAllergies] = useState([])
	const [disliked, setDisliked] = useState([])
	const [ingredients, setIngredients] = useState([])
	const [goals, setGoals] = useState([])
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const fetch = async () => {
			await axios.get(`/preferences/${user._id}`).then(p => {
				setDiets(p.data.diets)
				setAllergies(p.data.allergies)
				setDisliked(p.data.disliked)
				setIngredients(p.data.ingredients)
				setGoals(p.data.goals)
				setLoaded(true)
			})
		}
		fetch()
	}, [])

	return (
		<div className={s.preferences}>
			<Diets
				user={user}
				diets={diets}
				loaded={loaded}
				active={active === 'diets'}
				setActive={setActive}
				setDiets={setDiets}
			/>
			<Allergies
				user={user}
				allergies={allergies}
				loaded={loaded}
				active={active === 'allergies'}
				setActive={setActive}
				setAllergies={setAllergies}
			/>
			<Disliked
				user={user}
				ingredients={ingredients}
				loaded={loaded}
				active={active === 'disliked'}
				setActive={setActive}
				disliked={disliked}
				setDisliked={setDisliked}
			/>
			<Goals
				user={user}
				goals={goals}
				loaded={loaded}
				active={active === 'goals'}
				setActive={setActive}
				setGoals={setGoals}
			/>
		</div>
	)
}

export default Preferences
