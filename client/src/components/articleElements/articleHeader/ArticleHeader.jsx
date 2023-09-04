import s from './articleHeader.module.css'
import moment from 'moment'

const ArticleHeader = ({ createdAt, updatedAt, title }) => {
	return (
		<div className={s.header}>
			<h1 className={s.title}>{title}</h1>
			<h1 className={s.text} data-end={createdAt !== updatedAt ? 'updated' : null}>
				{moment(updatedAt).fromNow()}
			</h1>
		</div>
	)
}

export default ArticleHeader
