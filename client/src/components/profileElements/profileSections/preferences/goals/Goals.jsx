import { useEffect, useState } from 'react'
import s from './goals.module.css'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { goalsMenu } from '../../../../../helpers/preferences/preferences'

const Goals = ({ user, active, setActive, goals, setGoals, loaded }) => {
	const PF = process.env.REACT_APP_BASE_URL
	const [defaultGoals, setDefaultGoals] = useState([])

	const deleteGoal = async item => {
		if (item && user._id) {
			await axios
				.put(`/preferences/deleteGoal/${user._id}`, {
					title: item,
				})
				.then(d => {
					setGoals(d.data.goals)
				})
		}
	}

	const addGoal = async item => {
		if (user._id && item.trim().length !== 0) {
			await axios
				.put(`/preferences/addGoal/${user._id}`, {
					title: item,
				})
				.then(d => [setGoals(d.data.goals)])
		}
	}

	useEffect(() => {
		setDefaultGoals([...goalsMenu].filter(g => !goals.includes(g.title)))
	}, [goals])

	return (
		<div className={s.block}>
			<div className={s.header}>
				<h2 className={s.header__title}>Goals</h2>
				<p className={s.description}>Select your goals</p>
			</div>
			<div className={s.main}>
				<div className={s.topbar}>
					{!loaded &&
						new Array(3).fill(0).map((s, i) => <Skeleton key={i} height={150} width={150} circle={true} />)}
					{goals.map((d, index) => (
						<div
							className={s.bubble}
							style={{ width: '150px', height: '150px' }}
							key={index}
							onClick={() => {
								deleteGoal(d)
							}}
						>
							<h3 style={{ fontSize: '18px' }} className={s.bubble__title}>
								{d}
							</h3>
							<div className={s.delete}>
								<img src={`${PF}images/icons/profile/trashActive.svg`} alt="" />
								<h1>delete</h1>
							</div>
						</div>
					))}
					<div
						onClick={() => {
							setActive(active ? '' : 'goals')
						}}
						className={s.addButton}
					>
						<img
							className={s.plusIcon}
							src={`${PF}images/icons/profile/preferences/plus.svg`}
							alt="addButtonImg"
						/>
						<h2 className={s.bubble__title}>add goals</h2>
					</div>
				</div>
				<div className={active ? `${s.menu} ${s.active}` : s.menu}>
					<div className={s.menu__content}>
						{defaultGoals.length !== 0 ? (
							defaultGoals.map((d, index) => (
								<div
									className={s.bubble}
									key={index}
									onClick={() => {
										addGoal(d.title)
									}}
								>
									<h3 className={s.bubble__title}>{d.title}</h3>
								</div>
							))
						) : (
							<h2 className={s.header__title}>There are no more goals</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Goals
