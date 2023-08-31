import ByIngredientsMenu from '../byIngredientsMenu/ByIngredientsMenu'
import Paragragh from '../paragraph/Paragragh'
import PopularIngredients from '../popularIngredients/PopularIngredients'
import ShowMoreButton from '../showMoreButton/ShowMoreButton'
import TagCarousel from '../tagCarousel/TagCarousel'
import s from './browseSection.module.css'

const BrowseSection = ({ title, showMore, setShowMore, paragraphs, collections }) => {
	return (
		<div className={s.section}>
			<h1 className={s.title}>{title}</h1>
			<div className={s.paragraphs}>
				{showMore ? (
					paragraphs.map(item => <Paragragh key={item.id} title={item.title} text={item.text} />)
				) : (
					<Paragragh title={paragraphs[0].title} text={paragraphs[0].text} />
				)}
				<ShowMoreButton active={showMore} setActive={setShowMore} />
			</div>
			<ByIngredientsMenu />
			<PopularIngredients />
			<div className={s.collections}>
				{collections.map((collection, index) => (
					<TagCarousel key={index} collection={collection} />
				))}
			</div>
		</div>
	)
}

export default BrowseSection
