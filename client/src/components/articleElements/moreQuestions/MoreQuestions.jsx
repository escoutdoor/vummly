import { Link } from 'react-router-dom'
import s from './moreQuestions.module.css'

const MoreQuestions = () => {
	return (
		<div className={s.more}>
			<div className={s.content}>
				<h1 className={s.title}>Have more questions?</h1>
				<Link to={'/support/submit-request'} className={s.button}>
					Submit a request
				</Link>
			</div>
		</div>
	)
}

export default MoreQuestions
