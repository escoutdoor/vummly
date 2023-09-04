import s from './articleInfo.module.css'
import { Link } from 'react-router-dom'

const ArticleInfo = ({ data }) => {
	const PF = process.env.REACT_APP_BASE_URL

	return (
		<div className={s.info}>
			{data.map((item, index) => (
				<ul className={s.article} key={index}>
					{item.text
						? item.text.map((line, i) => (
								<li
									className={s.article__textline}
									style={{ fontStyle: `${line.fontstyle ? line.fontstyle : 'normal'}` }}
									key={i}
								>
									{line.fontweight ? <strong>{line.textline}</strong> : line.textline}
									<Link className={s.article__mail} to={line.link || `mailto:${line.mail}`}>
										{line.link || (line.mail && line.link) || line.mail}
									</Link>
									{line.image &&
										line.image.map((image, index) => (
											<img
												key={index}
												className={s.article__Image}
												src={`${PF}images/img/articles/${image.img}`}
											></img>
										))}
									{line.bigImage &&
										line.bigImage.map((image, index) => (
											<img
												key={index}
												className={s.article__bigImage}
												src={`${PF}images/img/articles/${image.img}`}
											/>
										))}
								</li>
						  ))
						: null}
					{item.points
						? item.points.map((p, i) => (
								<li
									className={s.article__point}
									style={{ listStyle: `${p.point || p.bold ? 'disc' : 'none'}` }}
									key={i}
								>
									{p.bold ? <strong>{p.bold}</strong> : null}
									{p.link || p.mail ? (
										<Link className={s.article__mail} to={p.link || `mailto:${p.mail}`}>
											{p.point || p.mail}
										</Link>
									) : (
										p.point
									)}
									{p.image
										? p.image.map((image, index) => (
												<img
													key={index}
													className={s.article__Image}
													src={`${PF}images/img/articles/${image.img}`}
												></img>
										  ))
										: null}
								</li>
						  ))
						: null}
				</ul>
			))}
		</div>
	)
}

export default ArticleInfo
