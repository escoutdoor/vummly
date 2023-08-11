import MealPlannerSupportHeader from '../../../components/plannerElements/mealPlannerSupportHeader/MealPlannerSupportHeader'
import Tip from '../../../components/tip/Tip'
import { tips } from '../../../helpers/planner/support'
import s from './mealPlannerSupport.module.css'

const MealPlannerSupport = () => {
	return (
		<div className={s.support}>
			<div className={s.wrapper}>
				<div className={s.content}>
					<MealPlannerSupportHeader />
					<h1 className={s.title}>Meal Planner Tips & FAQs</h1>
					<div className={s.tips}>
						{tips.map(tip => (
							<Tip tip={tip} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MealPlannerSupport
