import Skeleton from 'react-loading-skeleton';
import s from './nutrition.module.css'
import { Link } from 'react-router-dom';

const Nutrition = ({user, recipe, loaded}) => {
    const PF = process.env.REACT_APP_BASE_URL;

    return (
        <div className={s.nutrition}>
            <div className={s.header}>
                <h1 className={s.title}>Nutrition</h1>
                <button className={s.viewMore}>
                    <img src={`${PF}images/icons/recipes/lock.svg`} alt="lockView" />
                    view more
                </button>
            </div>
            {!user && <p className={s.subtitle}>Unlock full nutrition information by logging in</p>}
            <div className={s.bubbles}>
                {loaded ?
                    recipe.nutrition.map((nut, index) => (
                        user ? 
                            <div className={s.bubble} key={index} style={{backgroundImage: `linear-gradient(to top, rgb(190, 218, 217) ${(nut.value / 2500)*100}%, rgb(245, 245, 245) ${(nut.value / 2500)*100}%)`}}>
                                <p className={s.bubble__value}>{nut.value}</p>
                                <p className={s.bubble__title}>{nut.label}</p>
                            </div>
                        :
                            <div className={`${s.bubble} ${s.locked}`} key={index}>
                                <img src={`${PF}images/icons/recipes/lockNutr.svg`} alt="" />
                                <span style={{margin: '5px 0 0 '}} className={s.bubble__title}>{nut.label}</span>
                            </div>
                    ))
                : Array(6).fill(0).map((a, index) => <div key={index} style={{margin: 0}} className={s.bubbles}><Skeleton  circle={true} width={111} height={111}/></div>)}
            </div>
            <div className={s.tags}>
                <h1 className={s.title}>Recipe Tags</h1>
                <ul className={s.tagList}>
                    {loaded ?
                        recipe.tags.map((tag, index) => (
                            <li key={index} className={s.tag} title={tag}>
                                <Link to={'/recipes'} state={{query: tag}}>
                                    {tag}
                                </Link>
                            </li>
                        ))
                    : 
                        <div className={s.skeleton__tags}>
                            {Array(8).fill(0).map((a, index) => (
                                <Skeleton borderRadius={24} width={90} height={30} key={index}/>
                            ))}
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nutrition;