import s from './paragraph.module.css'

const Paragragh = ({ title, text }) => {
	return (
		<div className={s.paragraph}>
			<h1 className={s.title}>{title}</h1>
			{text.map(item => (
				<p key={item.id} className={s.text}>
					{item.textline}
				</p>
			))}
		</div>
	)
}

export default Paragragh
