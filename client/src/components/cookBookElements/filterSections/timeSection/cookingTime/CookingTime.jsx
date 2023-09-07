import s from './cookingTime.module.css'

const CookingTime = ({ item, setTime, active }) => {
	return (
		<button
			onClick={() => {
				active ? setTime(null) : setTime(item)
			}}
			className={active ? `${s.button} ${s.active}` : s.button}
		>
			{item} min
		</button>
	)
}

export default CookingTime
