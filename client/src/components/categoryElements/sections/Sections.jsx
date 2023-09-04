import Section from './section/Section'
import s from './sections.module.css'

const Sections = ({ sections }) => {
	return (
		<div className={s.sections}>
			{sections?.map(section => (
				<Section key={section._id} section={section} />
			))}
		</div>
	)
}

export default Sections
