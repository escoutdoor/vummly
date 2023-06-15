import './activate.css'
import Navbar from './../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { faqs } from '../../helpers/activate/faqs'

const Activate = () => {

    const [showQ, setShowQ] = useState(null)
    const PF = process.env.REACT_APP_BASE_URL;
    const toggleActivate = (e) => {
        showQ === e ? setShowQ(null) : setShowQ(e)
    }


    useEffect(() => {
        document.title = 'Activate Thermometer'
    }, [])

    return (
        <div className='activate'>
            <div className="activate__content">
                <Navbar value={false}/>
                <div className="activateMobile">
                    <p>To activate your Yummly® Smart Thermometer visit this page on your mobile device</p>
                </div>
                <div className="activateDownload">
                    <div className="activateWrapper">
                        <div className="activateDownload__content">
                            <div className="activateDownload__text">
                                <h1>Activate Thermometer</h1>
                                <p>Congratulations on your Smart Thermometer purchase! To get started, download the free Yummly® app, available for iOS or Android smartphones and tablets.</p>
                                <Link title={'Download'} to={'https://github.com/escoutdoor'} target="_blank">
                                    <img src={`${PF}images/img/activate/badge-ios.svg`} alt="iosDownloadIcon" />
                                </Link>
                            </div>
                            <img src={`${PF}images/img/activate/Activate_Your_Yummly_Smart_Thermometer.webp`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="activateFaqs">
                    <div className="activateWrapper" style={{padding:'0px 77px 100px 77px'}}>
                        <h1 className='activateFaqs__title'>FAQs</h1>
                        <div className="activateFaqs__box">
                            {faqs.map((f) => (
                                <div className="activateFaqs__box-item" onClick={() => toggleActivate(f.id)} key={f.id}>
                                    <div className="activateFaqs__boxQ">
                                        <span className='activateFaqs__icon'>{showQ === f.id ? "-" : "+" }</span>
                                        <h1 className='activateFaqs__questions'>{f.q}</h1>
                                    </div>
                                    <div className={showQ === f.id ? "activateFaqs__boxA selected" : "activateFaqs__boxA"}>
                                        <ul className='activateFaqs__boxPoints'>
                                            {f.points ? f.points.map((p) => (
                                                <li className='activateFaqs__boxPoints-item' key={p.id} data-end={`${p.point}`}>{p.ttl ? p.ttl : null} </li>
                                            )) : null}
                                        </ul>
                                        {f.text ? f.text.map((t) => (<p className='activateFaqs__text' key={t.id}>{t.t}</p>)) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activate;