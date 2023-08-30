import s from './showMoreButton.module.css'

const ShowMoreButton = ({ active, setActive }) => {
	return (
		<button className={s.button} onClick={() => setActive(!active)}>
			{active ? 'read less' : 'read more'}
		</button>
	)
}

export default ShowMoreButton
