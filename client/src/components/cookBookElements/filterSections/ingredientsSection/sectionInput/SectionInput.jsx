import s from './sectionInput.module.css'

const SectionInput = ({ placeholder, text, setText }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.section__input}>
			<img className={s.icon} src={`${PF}images/img/myFeed/searchIcon.svg`} alt="icon" />
			<input
				className={s.input}
				value={text}
				type="text"
				onChange={e => setText(e.target.value)}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default SectionInput
