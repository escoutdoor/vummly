import { useState } from 'react'
import s from './tip.module.css'

const Tip = ({ tip }) => {
	const [active, setActive] = useState(false)

	return (
		<div className={s.tip} onClick={() => setActive(!active)}>
			<div className={s.header}>
				<span className={s.questionStatus}>{active ? '-' : '+'}</span>
				<h1 className={s.title}>{tip.title}</h1>
			</div>
			<div
				className={active ? `${s.text} ${s.active}` : s.text}
				onClick={e => e.stopPropagation()}
			>
				{tip.text?.map(line => (
					<p key={line.id} className={s.textline}>
						{line.textline}
					</p>
				))}
				<ul className={s.points}>
					{tip.points?.map(point => (
						<li className={s.point} key={point.id}>
							{point.point}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Tip
