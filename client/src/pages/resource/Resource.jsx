import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import s from './resource.module.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import RecipeItem from '../../components/recipeItem/RecipeItem';
import Skeleton from 'react-loading-skeleton';
import RecipeSkeleton from '../../components/recipeSkeleton/RecipeSkeleton';

const Resource = () => {
    const [page, setPage] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/recipe/page/${id}`).then(i => setPage(i.data))
            setLoading(true)
        }
        fetch()
    }, [])

    console.log(page)

    // sum for stars
    const sum = (items) => {
        return items.reduce(function(a, b){
            return a + b['stars'];
        }, 0);
    }

    useEffect(() => {
        document.title = loading ? `${page[0].resource.name} on Vummly` : 'Vummly'
    }, [loading])

    const PF = 'http://localhost:3000/assets/'

    return (
        <div>
            <Sidebar />
            <div className={s.resource}>
                <div className='wrap1160'>
                    <div className={s.resource__content}>
                        <div className={s.banner}>
                            <div className={s.info}>
                                <img className={s.icon} src={`${PF}images/icons/resource/pageIcon.png`} alt="icon" />
                                <div className={s.details}>
                                    <h1 className={s.title}>{page && loading ? page[0].resource.name : <Skeleton width={220}/>}</h1>
                                    <p className={s.description}>{page && loading ? `${page[0].resource.name}, it's what's cooking online! Over 100,000 recipes for any cuisine imaginable. For home cooks and gourmets alike.` : <Skeleton height={25}/>}</p>
                                    <div className={s.socials}>
                                        <Link to={'mailto:vanap387@gmail.com'}><img className={s.social} src={`${PF}images/icons/resource/mail.svg`} alt="mail" /></Link>
                                        <Link to={'https://github.com/escoutdoor'}><img className={s.social} src={`${PF}images/icons/resource/github.svg`} alt="github" /></Link>
                                        <Link to={'https://www.linkedin.com/in/ivan-popov-015b61252/'}><img className={s.social} src={`${PF}images/icons/resource/linkedin.svg`} alt="linkedin" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={s.search}>
                                
                            </div>
                        </div>
                        <div className={s.recipes}>
                            {!loading && <RecipeSkeleton recipes={50}/>}
                            {page.map((p) => (
                                <RecipeItem recipe={p} key={p._id} rating={sum(p.reviews)/p.reviews.length}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;