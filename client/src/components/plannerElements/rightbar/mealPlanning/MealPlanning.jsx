import { useEffect, useState } from 'react'
import MoreMenu from '../../moreMenu/MoreMenu'
import s from './mealPlanning.module.css'
import axios from 'axios'
import PlanningList from '../../planningList/PlanningList'

const MealPlanning = ({ user }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [mealPlanner, setMealPlanner] = useState([])
	const [loaded, setLoaded] = useState(false)

	const clearList = async () => {
		try {
			await axios.put(`/meal-planner/clear/${user?._id}`).then(p => {
				setMealPlanner(p.data)
			})
		} catch (error) {
			console.log('clearList', error)
		}
	}

	const fetch = async () => {
		try {
			await axios.get(`/meal-planner/${user?._id}`).then(p => {
				setMealPlanner(p.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetch error rightbar')
		}
	}

	useEffect(() => {
		if (user) {
			fetch()
		}
	}, [user])

	return (
		<div className={s.rightbar}>
			<div className={s.header}>
				<h1 className={s.header__title}>meal planning</h1>
				<MoreMenu normal={true} user={user} planner={mealPlanner} clear={clearList} />
			</div>
			<div className={s.main}>
				<PlanningList loaded={loaded} planner={mealPlanner.recipes || mealPlanner} setPlanner={setMealPlanner} user={user} />
			</div>
		</div>
	)
}

export default MealPlanning
