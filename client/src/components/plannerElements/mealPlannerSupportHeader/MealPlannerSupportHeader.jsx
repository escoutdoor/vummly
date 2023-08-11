import s from './mealPlannerSupportHeader.module.css'
import { supportHeader } from '../../../helpers/planner/support'
import FaqItem from './faqItem/FaqItem'

const MealPlannerSupportHeader = () => {
	return (
		<div className={s.supportHeader}>
			<div className={s.header}>
				<h1 className={s.headline}>Meal Planning Made Easy</h1>
				<p className={s.text}>
					Get organized with the Vummly Meal Planner — available on web and in the app with a paid subscription to Vummly — and say goodbye to mid-week dinner dilemmas,
					last-minute trips to the store, and wasted food.
				</p>
			</div>
			<div className={s.faq}>
				{supportHeader.map(item => (
					<FaqItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default MealPlannerSupportHeader
