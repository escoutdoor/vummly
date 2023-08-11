import s from './faqItem.module.css'

const FaqItem = ({ item }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.faqItem}>
			<img className={s.icon} src={`${PF}images/icons/planner/${item.image}.svg`} alt="icon" />
			<h1 className={s.title}>{item.title}</h1>
			<p className={s.text}>{item.text}</p>
		</div>
	)
}

export default FaqItem
