import s from './article.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import SearchInput from '../../components/searchInput/SearchInput'
import SkewLoader from 'react-spinners/SkewLoader'
import Sidebar from '../../components/articleElements/sidebar/Sidebar'
import ArticleHeader from '../../components/articleElements/articleHeader/ArticleHeader'
import ArticleInfo from '../../components/articleElements/articleInfo/ArticleInfo'
import MoreQuestions from '../../components/articleElements/moreQuestions/MoreQuestions'
import Relatives from '../../components/articleElements/relatives/Relatives'

const Article = () => {
	const { articleId } = useParams()
	const [article, setArticle] = useState({})
	const [loaded, setLoaded] = useState(false)

	const fetchArticle = async () => {
		try {
			await axios.get(`/support/articles/getOne/${articleId}`).then(a => {
				setArticle(a.data)
				setLoaded(true)
			})
		} catch (error) {
			console.log('fetchArticle error:', error)
		}
	}

	useEffect(() => {
		fetchArticle()
	}, [articleId])

	return loaded ? (
		<div className={s.article}>
			<div className="wrap1160">
				<SearchInput
					breadcrumbs={{
						categoryName: article.categoryName,
						categoryId: `categories/${article.categoryId}`,
					}}
					title={article.title}
				/>
				<div className={s.article__container}>
					<Sidebar list={article.section} articleId={article.id} />
					<div className={s.article__main}>
						<ArticleHeader
							createdAt={article.createdAt}
							updatedAt={article.updatedAt}
							title={article.title}
						/>
						<ArticleInfo data={article.data} />
						<MoreQuestions />
						<Relatives article={article} />
					</div>
				</div>
			</div>
		</div>
	) : (
		<SkewLoader color="#3a9691" size={30} className="loaderSkew" />
	)
}

export default Article
