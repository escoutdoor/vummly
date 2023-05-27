import {Link} from 'react-router-dom';
import './support.css'
import { useLocation, useNavigate } from 'react-router-dom';
import SuppNavbar from './../../components/suppNavbar/SuppNavbar'
import SuppFooter from './../../components/suppFooter/SuppFooter'
import { useState, useEffect } from 'react';

const Support = () => {
    const PF = 'http://localhost:3000/assets/'
    const [searchVal, setSearchVal] = useState(null)

    const searchHandle = (e) => {
        setSearchVal(e)
    }


    useEffect(() => {
        document.title = 'Vummly Help Center'
    }, [document.title])

    window.history.replaceState({}, document.title)
    const location = useLocation()
    const [sent, setSent] = useState(location.state?.sent)

    useEffect(() => {
        setTimeout(() => setSent(false), 5000)
    }, [])

    const navigate = useNavigate()
    const handleEnter = (event) => {
        event.key === 'Enter' && navigate(`${searchVal !== null ? '/support/search' : ''}`, {state:{data: searchVal}})
    }


    const support = [
        {
            id: 1,
            title : 'Smart Thermometer',
            link: 'categories/thermometer'
        },
        {
            id: 2,
            title : 'Yummly Paid Subscription',
            link: 'categories/sub'
        },
        {
            id: 3,
            title : 'Website Help Topics',
            link: 'categories/website-help-topics'
        },
        {
            id: 4,
            title : 'Yummly iOS App',
            link: 'categories/ios-app'
        },
        {
            id: 5,
            title : 'Yummly Android App',
            link: 'categories/android-app'
        },
        {
            id: 6,
            title : 'Publisher Help Topics',
            link: 'categories/publisher-help-topics'
        }
    ]

    return (
        <>
            {sent && <div className={sent ? "modalEmail" : "modalEmail hide"}>
                <div className='modalEmail__content'>
                    <h1 className='modalEmail__title'>Your message has been sent</h1>
                </div>
            </div>}
            <div className="support">
                <div className="support__content">
                    <div className="supportSearch">
                        <div className="supportSearch__content">
                            <Link className='searchIcon' to={searchVal !== null ? '/support/search' : ''} state={{data: searchVal}}>
                                <img src={`${PF}images/icons/arrows/support/search.svg`} alt="" />
                            </Link>
                            <input onKeyDown={handleEnter} onChange={(e) => searchHandle(e.target.value)} type="search" placeholder='Search' />
                        </div>
                    </div>
                    <div className="supportWrap">
                        <div className="support__navigation">
                            {support.map((sup) => (
                                <Link key={sup.id} to={sup.link}>
                                    <button className="support__navigation-item">{sup.title}</button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Support;