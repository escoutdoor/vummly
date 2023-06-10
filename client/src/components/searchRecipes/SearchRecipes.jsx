import styles from './searchRecipes.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {slider as feed} from '../../helpers/myFeed/myfeedSlider'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const SearchRecipes = ({setActive, active}) => {
    const dropInput = useRef(null)
    const PF = process.env.REACT_APP_BASE_URL;

    const [searchActive, setSearchActive] = useState(false)
    const [searchVal, setSearchVal] = useState('')
    const [searchHistory, setSearchHistory] = useState([])

    const handleActive = () => {
        searchActive ? setSearchActive(false) : setSearchActive(true)
        window.scrollTo(0, 0)
    }

    const navigate = useNavigate()

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('search-history')) || []
        setSearchHistory(storage)
    }, [])

    useEffect(() => {
        if (dropInput.current) {
            dropInput.current.focus();
        }
        setActive(searchActive)
    }, [searchActive])

    const handleEnter = (event) => {
        event.key === 'Enter' && navigate('/recipes', {state: {query: searchVal}})
    }

    const handleQuery = (e) => {
        setSearchVal(e.target.value)
    }

    return (
        <div className={styles.search}>
            <div className={styles.search__container} >
                <div className={styles.searchRecipes}>
                    <div className={styles.searchRecipes__searchBar} onClick={() => handleActive()}>
                        <img className={styles.searchIcon}  src={`${PF}images/img/myFeed/searchIcon.svg`} alt="searchIcon" />
                        <input disabled={true} type="text" className={styles.searchRecipes__input} placeholder='Search recipes' />
                    </div>
                    <div onClick={() => {handleActive();}} className={searchActive ? styles.searchRecipes__drop : `${styles.searchRecipes__drop} ${styles.hide}`}>
                        <div onClick={(e) => e.stopPropagation()} className={searchActive ? styles.searchRecipes__dropContent : `${styles.searchRecipes__dropContent} ${styles.hide}`}>
                            <div className={styles.drop__search}>
                                <Link to={'/recipes'} state={{query: searchVal}}>
                                    <img className={styles.drop__searchIcon} src={`${PF}images/img/myFeed/searchIcon.svg`} alt="searchIconDrop" />
                                </Link>
                                <input onChange={(e) => handleQuery(e)} onKeyDown={handleEnter} ref={dropInput} placeholder='Search recipes' type="search" className={styles.drop__searchInput} />
                            </div>
                            <div className={styles.drop__recent}>
                                <h1>Recent Searches:</h1>
                                <div className={styles.recentSearches}>
                                    {searchHistory.map((s, index) => (
                                        <span key={index} onClick={() => navigate('/recipes', {state: {query: s}})} data-end={searchHistory[4] === s ? '' : ','}>{s}</span> 
                                    ))}
                                </div>
                            </div>
                            <div className={styles.findPantryReady}>
                                <h1 className={styles.findPantryReady__title}>Find recipes you can make right now</h1>
                                <p className={styles.findPantryReady__desc}>Get inspired by recipes you can make with the ingredients you have at home today.</p>
                                <Link to={'/'}>
                                    <button className={styles.findPantryReady__butt}>Find Pantry Ready Recipes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper className={styles.swiperSearch} pagination={{clickable: true}} modules={[Pagination, Autoplay]} autoplay={{delay: 10000, disableOnInteraction: false}}>
                    {feed && feed.map((f) => (
                        <SwiperSlide className={styles.swiperSearch__item} key={f.id} >
                            <div className={styles.searchWrapper} >
                                <div className={styles.swiperText}>
                                    <h1 className={styles.swiperText__title}>{f.title}</h1>
                                    <ul className={styles.swiperList}>
                                        {f.points ? 
                                            f.points.map((point, index) => (
                                                point.label ? <li className={styles.swiperList__item} key={point.id}>
                                                    {point.label}
                                                </li>
                                                :
                                                (<div key={point.id} className={styles.swiperList__itemImg}>
                                                    {point.image.map((i) => (<img key={i.id} src={`${PF}images/img/myFeed/${i.img}`}></img>))}
                                                </div> )
                                            ))
                                            : 
                                            <li className={styles.swiperList__desc}>{f.description}</li>
                                        }
                                    </ul>
                                    <Link className={styles.buttLink} to={f.butt.link}>
                                        {f.butt.title}
                                    </Link>
                                </div>
                                {f.images && f.images.map((i) => (<div key={i.id} className={styles.swiperRight}>
                                    <img className={styles.swiperRight__img} src={`${PF}images/img/myFeed/${i.img}`} alt="" />
                                </div>)) }
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SearchRecipes;