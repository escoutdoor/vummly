import axios from 'axios'
import s from './mealPlanner.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/features/userSlice'
import { Link } from 'react-router-dom'
import MoreMenu from '../../../components/plannerElements/moreMenu/MoreMenu'
import MealPlannerList from '../../../components/plannerElements/mealPlannerList/MealPlannerList'
import EmptyMealPlanner from '../../../components/plannerElements/emptyMealPlanner/EmptyMealPlanner'
import MealPlannerController from '../../../components/plannerElements/mealPlannerController/MealPlannerController'

const MealPlanner = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const [mealPlanner, setMealPlanner] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [activeMore, setActiveMore] = useState(false)
	const user = useSelector(selectUser)

	const fetchPlanner = async () => {
		try {
			await axios.get(`/meal-planner/${user?._id}`).then(p => {
				setMealPlanner(p.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchPlanner', error)
		}
	}

	useEffect(() => {
		if (user) {
			fetchPlanner()
		}
	}, [user])

	useEffect(() => {
		document.title = 'Meal Planning & Grocery Shopping Made Easy | Vummly'
	}, [])

	const clearList = async () => {
		try {
			await axios.put(`/meal-planner/clear/${user?._id}`).then(p => {
				setMealPlanner(p.data)
			})
		} catch (error) {
			console.log('clearList', error)
		}
	}

	const addToShoppingList = async () => {
		try {
		} catch (error) {
			console.log('addToShoppingList', error)
		}
	}

	return (
		<div className={s.planner}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<div className={s.buttons}>
						<Link to={'/meal-planner/support'}>
							<img className={s.icon} src={`${PF}images/icons/planner/info.svg`} alt="infoIcon" />
						</Link>
						<div className={s.more}>
							<img onClick={() => setActiveMore(!activeMore)} className={s.icon} src={`${PF}images/icons/planner/more.svg`} alt="dotsIcon" />
							<MoreMenu user={user} planner={mealPlanner} active={activeMore} clear={clearList} />
						</div>
					</div>
					<h1 className={s.title}>meal planner</h1>
					{mealPlanner.recipes?.length !== 0 && <MealPlannerController clearList={clearList} addToShoppingList={addToShoppingList} />}
				</div>
				<div className={s.main}>{mealPlanner.recipes?.length !== 0 ? <MealPlannerList user={user} setPlanner={setMealPlanner} planner={mealPlanner} /> : <EmptyMealPlanner user={user} />}</div>
			</div>
		</div>
	)
}

export default MealPlanner
