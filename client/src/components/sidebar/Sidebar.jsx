import './sidebar.css'
import { useEffect, useState } from 'react';
import { sideInf as sideData, aboutYumm as aboutUs, privacy, social} from './../../helpers/thermometer/sidebar'
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const PF = 'http://localhost:3000/assets/'
    const year = new Date().getFullYear()

    const [selected, setSelected] = useState(null)
    const [about, setAbout] = useState(false)
    
    const aboutClick = () => {
        about ?  setAbout(false) : setAbout(true)
    }

    const clicked = (e) => {
        selected ? setSelected(null) : setSelected(e)
    }

    const [hover, setHovered] = useState(null)

    const Hover = (e) => {
        hover ? setHovered(null) : setHovered(e)
    }

    const [activeLink, setActiveLink] = useState()
    // const act = sideData.filter(item => item.downtitles.some(d => d.link === window.location.pathname)).flatMap((obj) => obj.downtitles.filter((d) => d.link === window.location.pathname && d.link))
    useEffect(() => {
        const act = sideData.flatMap(data => data.downtitles.filter(d => d.link === window.location.pathname))
        setActiveLink(...act)
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="sidebarUpgrade">
                    <Link to={'/'}>
                        <img className='logo' src={`${PF}images/logo/yummlyLogo.svg`} alt="logoYummly" />
                    </Link>
                    <Link to={'/profile/PopovIvan'}>
                        <img title='Profile' className='avatar' src={`${PF}images/icons/ava.jpg`} alt="avatar" />
                    </Link>
                    <Link to={'/'}>
                        <button title='Upgrade' className='upgradeButt'>Upgrade</button>
                    </Link>
                </div>
                <div className="sidebarNav">
                    {sideData.map((part) => (
                        <div className={part.id < 7 ? "sidebarNav-item" : "sidebarNav-item brnone"} title={part.title} key={part.id}>
                            <div className={"sidebarAbove"} onClick={() => clicked(part.id)}>
                                {part.downtitles.length <= 1 ? part.downtitles.map((ttl, index) => (
                                    <Link key={index} to={ttl.link}>
                                        <div className='sidebar-click'><h1 className='sidebar-title'>{part.title}</h1></div>
                                    </Link>
                                )) : 
                                <div className='sidebar-click'><h1  className='sidebar-title'>{part.title}</h1><img src={selected === part.id ? `${PF}images/icons/arrows/sidebar/downLightGreen.svg` : `${PF}images/icons/arrows/sidebar/rightLightGreen.svg`} alt="arrDropSideBar" /></div>}
                            </div>
                            <ul className={selected === part.id ? 'sidebarDrop show' : 'sidebarDrop'}>
                                {part.downtitles.length > 1 ? part.downtitles.map((downItm, index) => (
                                    <Link title={downItm.label} to={downItm.link} style={{color: activeLink && activeLink.link === downItm.link && downItm.label === activeLink.label ? '#3a9691' : '#707070', fontWeight: activeLink && activeLink.link === downItm.link && downItm.label === activeLink.label ? '700' : '400'}} className={selected === part.id ? 'sidebarDrop-item show' : 'sidebarDrop-item'} key={index}>{downItm.label}</Link>
                                )) : null}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="sidebarContacts">
                    <div className="aboutUs">
                        {aboutUs.map((i, index) => (
                            <div className={about ? "aboutUs-container active" : "aboutUs-container"} key={index}>
                                <div className="aboutUs_clickable" onClick={() => aboutClick()}>
                                    <h1 className='click__title'>{i.title}</h1>
                                    <img src={about ? `${PF}images/icons/arrows/sidebar/downLightGreen.svg` : `${PF}images/icons/arrows/sidebar/rightLightGreen.svg`} alt="arrAbout" />
                                </div>
                                <ul className={about ? 'links active': 'links'}>
                                    {i.downtitles.map((down, index) => (
                                        <Link className='links-item' to={down.link} key={index}>
                                            {down.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="privacy">
                        {privacy.map((pr, index) => (
                            <ul className="privacy-content" key={index}>
                                {pr.docs.map((i, ind) => (
                                    <Link className='privacy-content__item' key={ind} to={i.link}>
                                        <li>{i.label}</li>
                                    </Link>
                                ))}
                            </ul>
                        ))}
                    </div>

                    <div className="bottom__social">
                        {social.map((soc) => (
                            <ul className='social' key={soc.id}>
                                {soc.item.map((item) => (
                                    <Link target="_blank" to={item.link} onMouseEnter={() => Hover(soc.id)} onMouseOut={() => Hover(null)} key={soc.id}> 
                                        <img className='socialItem' src={hover === soc.id ? `${PF}` + item.hover : `${PF}`+ item.logo } alt="iconSoc"/>
                                    </Link>
                                ))}
                            </ul>
                        ))}
                    </div>

                    <div className="ummlyYear">
                        <p className='rights'>{`®/™©${year} Yummly. All rights reserved.`}</p>
                        <Link to={'/whirlpool'}>
                            <div className="part">
                                <p>Part of</p>
                                <img src={`${PF}images/icons/social/whirlpool-logo.webp`} alt="partOf" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;