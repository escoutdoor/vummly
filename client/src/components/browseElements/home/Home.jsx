import { useState } from 'react'
import { home } from '../../../helpers/browse/home'
import Paragragh from '../paragraph/Paragragh'
import s from './home.module.css'
import ShowMoreButton from '../showMoreButton/ShowMoreButton'
import ByIngredientsMenu from '../byIngredientsMenu/ByIngredientsMenu'
import PopularIngredients from '../popularIngredients/PopularIngredients'

const Home = () => {
	const [showMore, setShowMore] = useState(false)

	return (
		<div className={s.home}>
			<h1 className={s.title}>Browse</h1>
			<div className={s.paragraphs}>
				{showMore ? (
					home.map(item => <Paragragh key={item.id} title={item.title} text={item.text} />)
				) : (
					<Paragragh title={home[0].title} text={home[0].text} />
				)}
				<ShowMoreButton active={showMore} setActive={setShowMore} />
			</div>
			<ByIngredientsMenu />
			<PopularIngredients />
			{/* <BrowseCarousel /> */}
		</div>
	)
}

export default Home
