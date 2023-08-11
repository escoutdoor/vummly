import { useState } from 'react'
import s from './ideas.module.css'
import { Link } from 'react-router-dom'
import YourVums from '../../../components/plannerElements/yourVums/YourVums'
import MealRecommendations from '../../../components/plannerElements/mealRecommendations/MealRecommendations'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/features/userSlice'
import MealPlanning from '../../../components/plannerElements/rightbar/mealPlanning/MealPlanning'

const Ideas = () => {
	const PF = process.env.REACT_APP_BASE_URL
	const [section, setSection] = useState('recommendations')
	const user = useSelector(selectUser)

	return (
		<div className={s.ideas}>
			<div className={s.wrapper}>
				<div className={s.content}>
					<div className={s.header}>
						<Link to={'/meal-planner/support'}>
							<img src={`${PF}images/icons/planner/info.svg`} alt="infoheader" />
						</Link>
						<Link to={'/meal-planner'}>
							<img className={s.logo__button} src={`${PF}images/logo/mealPlannerLogo.webp`} alt="logoheader" />
						</Link>
						<Link to={'/meal-planner'}>
							<img className={s.close__button} src={`${PF}images/icons/profile/x.svg`} alt="closeheader" />
						</Link>
					</div>
					<div className={s.main}>
						<div className={s.main__header}>
							<div className={s.text}>
								<h1 className={s.title}>Create Your Plan</h1>
								<p className={s.details}>
									Time to choose your meals! Use the <img src={`${PF}images/icons/planner/plus-circle.svg`} /> sign to add recipes to your plan. For exciting new
									meal ideas personalized to your taste preferences, check out Your Recommendations. Or look through your saved recipes under Your Yums.
								</p>
								<p className={s.details}>Want something else? Click on any recipe in Yummly and add it to your plan.</p>
							</div>
							<ul className={s.navigation}>
								<li onClick={() => setSection('vums')} className={section === 'vums' ? `${s.navigation__item} ${s.active}` : s.navigation__item}>
									your vums
								</li>
								<li
									onClick={() => setSection('recommendations')}
									className={section === 'recommendations' ? `${s.navigation__item} ${s.active}` : s.navigation__item}>
									your recommendations
								</li>
							</ul>
						</div>
						{section === 'recommendations' ? <MealRecommendations user={user} /> : <YourVums user={user} />}
					</div>
				</div>
			</div>
			<MealPlanning user={user} />
		</div>
	)
}

export default Ideas
