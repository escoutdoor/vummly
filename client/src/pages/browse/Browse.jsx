import s from './browse.module.css'
import MyFeedSwiper from '../../components/searchRecipes/myFeedSwiper/MyFeedSwiper'
import BrowseNavigation from '../../components/browseElements/browseNavigation/BrowseNavigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BrowseSection from '../../components/browseElements/browseSection/BrowseSection'
import {
	home,
	ingredients,
	cuisines,
	diets,
	courses,
	techniques,
	quickneasy,
	seasonal,
} from '../../helpers/browse/sections'
import { useLocation } from 'react-router-dom'

const Browse = () => {
	const [active, setActive] = useState('home')
	const [collections, setCollections] = useState([])
	const [limit, setLimit] = useState(5)
	const [showMore, setShowMore] = useState(false)

	const location = useLocation()
	const section = location.state?.section
	window.history.replaceState({}, active)

	const fetch = async () => {
		try {
			await axios.get(`/recipe/bytags?limit=${limit}`).then(info => {
				setCollections(info.data)
			})
		} catch (error) {
			console.log('fetch home browse error:', error)
		}
	}

	useEffect(() => {
		fetch()
	}, [limit])

	useEffect(() => {
		if (section) {
			setActive(section)
		}
	}, [])

	return (
		<div className={s.browse}>
			<div className={s.browse__header}>
				<MyFeedSwiper />
			</div>
			<div className={s.browse__main}>
				<div className="wrap1160">
					<div className={s.browse__content}>
						<BrowseNavigation
							setLimit={setLimit}
							setShowMore={setShowMore}
							active={active}
							setActive={setActive}
						/>
						<div className={s.section}>
							{active === 'home' && (
								<BrowseSection
									title={'Browse'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={home}
									collections={collections}
								/>
							)}
							{active === 'ingredients' && (
								<BrowseSection
									title={'Ingredients'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={ingredients}
									collections={collections}
								/>
							)}
							{active === 'cuisines' && (
								<BrowseSection
									title={'Cuisines'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={cuisines}
									collections={collections}
								/>
							)}
							{active === 'diets' && (
								<BrowseSection
									title={'Diets'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={diets}
									collections={collections}
								/>
							)}
							{active === 'courses' && (
								<BrowseSection
									title={'Courses'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={courses}
									collections={collections}
								/>
							)}
							{active === 'techniques' && (
								<BrowseSection
									title={'Techniques'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={techniques}
									collections={collections}
								/>
							)}
							{active === "quick n' easy" && (
								<BrowseSection
									title={"quick n' easy"}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={quickneasy}
									collections={collections}
								/>
							)}
							{active === 'seasonal' && (
								<BrowseSection
									title={'Seasonal'}
									showMore={showMore}
									setShowMore={setShowMore}
									paragraphs={seasonal}
									collections={collections}
								/>
							)}
						</div>
						<footer className={s.footer}>
							<button className={s.button} onClick={() => setLimit(limit + 5)}>
								load more
							</button>
						</footer>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Browse
