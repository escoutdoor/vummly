import s from './searchInput.module.css'
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const SearchInput = ({way, title}) => {
    const PF = 'http://localhost:3000/assets/'

    const [searchVal, setSearchVal] = useState(null)
    const searchHandle = (e) => {
        setSearchVal(e)
    }

    const navigate = useNavigate()
    const handleEnter = (event) => {
        event.key === 'Enter' && navigate(`${searchVal !== null ? '/support/search' : ''}`, {state:{data: searchVal}})
    }

    return (
        <div className={s.searchBar}>
            <div className={s.searchBar__way}>
                <Link data-end={'>'} className={s.searchBar__link} to={'/support'}>Yummly Help Center</Link>
                {way && way.map((w, index) => (
                    <Link key={index} to={`/support/${w.link}`}>
                        <p data-end={'>'} className={s.searchBar__link} >{w.wayname}</p>
                    </Link>
                ))}
                {title && title}
            </div>
            <div className={s.searchBar__search}>
                <Link className={s.searchIcon} to={searchVal !== null ? '/support/search' : ''} state={{data: searchVal}}>
                    <img src={`${PF}images/icons/arrows/support/search.svg`} alt="" />
                </Link>
                <input onKeyDown={handleEnter} onChange={(e) => searchHandle(e.target.value)} className={s.search} type="search" placeholder='Search'/>
            </div>
        </div>
    );
};

export default SearchInput;