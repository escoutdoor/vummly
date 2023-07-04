import s from './buttons.module.css'

const Buttons = ({ bold, title, minutes, setTime, clear, visibility }) => {
	const handleTime = item => {
		setTime(item)
	}

	return (
		<div className={s.buttons} style={{ display: visibility ? 'block' : 'none' }}>
			<div className={s.buttons__content}>
				<span className={s.title} style={{ fontWeight: bold ? 700 : 400 }}>
					{title}
				</span>
				<ul className={s.options}>
					{minutes.map((min, index) => (
						<li
							key={index}
							onClick={() => {
								handleTime(min)
							}}
							className={s.option}>
							{min} min
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Buttons
