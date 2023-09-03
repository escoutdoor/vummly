import Tip from './../tip/Tip'
import s from './faqs.module.css'

const Faqs = ({ faqs }) => {
	return (
		<div className={s.faqs}>
			<h1 className={s.title}>FAQs</h1>
			<div className={s.list}>
				{faqs.map(f => (
					<Tip key={f.id} tip={f} />
				))}
			</div>
		</div>
	)
}

export default Faqs
