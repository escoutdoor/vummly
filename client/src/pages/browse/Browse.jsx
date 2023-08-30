import s from './browse.module.css'
import MyFeedSwiper from '../../components/searchRecipes/myFeedSwiper/MyFeedSwiper'
import BrowseNavigation from '../../components/browseElements/browseNavigation/BrowseNavigation'
import { useState } from 'react'
import Home from '../../components/browseElements/home/Home'

const Browse = () => {
	const [active, setActive] = useState('home')

	return (
		<div className={s.browse}>
			<div className={s.browse__header}>
				<MyFeedSwiper />
			</div>
			<div className={s.browse__main}>
				<div className="wrap1160">
					<div className={s.browse__content}>
						<BrowseNavigation active={active} setActive={setActive} />
						<div className={s.section}>
							{active === 'home' && <Home />}
							{active === 'ingredients' && <Home />}
							{active === 'cuisines' && <Home />}
							{active === 'diets' && <Home />}
							{active === 'courses' && <Home />}
							{active === 'techniques' && <Home />}
							{active === "quick n' easy" && <Home />}
							{active === 'seasonal' && <Home />}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Browse
