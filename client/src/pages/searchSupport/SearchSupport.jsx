import { useEffect, useState } from 'react';
import SuppNavbar from './../../components/suppNavbar/SuppNavbar'
import SuppFooter from './../../components/suppFooter/SuppFooter'
import styles from './search.module.css'
import { useLocation, Link} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

// loading
import SkewLoader from "react-spinners/SkewLoader";
import SearchInput from '../../components/searchInput/SearchInput';

const SearchSupport = () => {

    const PF = 'http://localhost:3000/assets/'
    const location = useLocation()

    const data = location.state?.data

    const searchHandle = (e) => {
        setSearchVal(e)
    }

    const [all, setAll] = useState(true)
    const [searchVal, setSearchVal] = useState(data ? data : '')
    const [filter, setFilter] = useState('')
    const [artInfo, setArtInfo] = useState([])
    const [loading, setLoading] = useState(false)

    const [secInfo, setSecInfo] = useState([])

    useEffect(() => {
        searchVal === '' && setSearchVal(data)
    }, [])

    useEffect(() => {
        const find = async () => {
            await axios.get(`/support/articles/${filter !== '' ? `${filter}` : 'all'}`).then(info => setArtInfo(info.data))
            await axios.get(`/support/sections/`).then(sec => setSecInfo(sec.data))
            setLoading(true)
        }
        document.title = `${searchVal ? `Search Results / ${searchVal}` : 'Search for something'}`;
        !loading && setTimeout(() => find(), 400)
    }, [secInfo, loading, searchVal])

    return (
        <div className={styles.search}>
            <div className={styles.searchWrapper}>
                {loading ?
                <div className={styles.search__container}>
                    <div className={styles.searchbar}>
                        <div className={styles.way}>
                            <Link to={'/support'} data-end={'>'}>Yummly Help Center</Link>
                            <p>Search results</p>
                        </div>
                        <div className={styles.searchSomething}>
                            <Link className={styles.searchIcon} to={searchVal !== null ? '/support/search' : ''} state={{data: searchVal}}>
                                <img src={`${PF}images/icons/arrows/support/search.svg`} alt="" />
                            </Link>
                            <input onChange={(e) => searchHandle(e.target.value)} value={searchVal} type="search" placeholder={'Search'} />
                        </div>
                    </div>
                    <div className={styles.results}>
                        <div className={styles.left}>
                            <h1 className={styles.leftTitle}>By Category</h1>   
                            <ul className={styles.nav}>
                                <li onClick={() => {setFilter('all'); setAll(true); {(!all) && setLoading(false)};}}  style={{background: all ? '#e9ebed' : '#fff'}} className={styles.nav__item}>All Categories</li>
                                {[...new Set(artInfo.flatMap(item => item.way.map(way => way.wayname)))].map(wayname => (
                                artInfo.some(item => item.way.some(way => way.wayname === wayname && item.title.toLowerCase().includes(searchVal.toLowerCase()))) &&
                                    <li style={{background : `${artInfo.flatMap(item => item.way).find(way => way.wayname === wayname)?.link.split('/')[1] === filter ? '#e9ebed' : '#fff'}`}} className={styles.nav__item} onClick={() => {setFilter(artInfo.flatMap(item => item.way).find(way => way.wayname === wayname)?.link.split('/')[1]); setAll(false); setLoading(false)}} key={wayname}>{wayname}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.rightAmount}>
                                {artInfo && artInfo.filter(inf => inf.title.toLowerCase().includes(searchVal.toLowerCase())).length}{artInfo.filter(inf => inf.title.toLowerCase().includes(searchVal.toLowerCase())).length > 1 ? ' results': ' result'}{searchVal !== '' ? ` for "${searchVal}"`:', search for something...'}  
                            </div>
                            {artInfo && artInfo.filter(inf => inf.title.toLowerCase().includes(searchVal.toLowerCase())).map((el) => (
                                secInfo.map((sec) => (
                                    sec.list.filter(l => l.link === el.idPage).map((ct) => (
                                        el.way.map((w, index) => (
                                            <div className={styles.searchResult} key={index}>
                                                <Link style={{width: 'fit-content'}} key={index} to={`/support/articles/${sec.own}/${el.idPage}`}><h1 className={styles.searchResult__title}>{el.title}</h1></Link>
                                                <div className={styles.searchResult__wayNdate}>
                                                    <div className={styles.searchResult__way}>
                                                        <Link to={'/support'}>Yummly Help Center</Link> {'>'}
                                                        <Link to={`/support/${w.link}`}>{w.wayname}</Link> {'>'}
                                                        <Link to={`/support/articles/${sec.own}/${ct.link}`}>{ct.name}</Link>
                                                    </div>
                                                    <p className={styles.searchResult__date}>{moment(el.updatedAt).format('LLL')}</p>
                                                </div>
                                                <p>{}</p>
                                            </div>
                                        ))
                                    ))
                                ))
                            ))}
                        </div>
                    </div>
                </div> : <SkewLoader color="#3a9691" size={30} className='loaderSkew' /> }
            </div>
        </div>
    );
};

export default SearchSupport;