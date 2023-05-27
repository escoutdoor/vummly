
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react'
import './overview.css'
// components
import Advantages from '../../components/advantages/Advantages';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from './../../components/sidebar/Sidebar'
// helpers and pioc && audio
import { features } from '../../helpers/thermometer/features';
import { thermSwiper, thermSwiperInfo as infoTherm } from '../../helpers/thermometer/thermSwiper';
import { howitWorks, techSpecs } from '../../helpers/thermometer/howitworksNspecs';


// swiper sett
import { FreeMode, Navigation, Thumbs} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { faqs } from '../../helpers/thermometer/faqs';
import { footerTherm } from '../../helpers/thermometer/footer';

const Overview = () => {

    useEffect(() => {
        document.title = 'Vummly Smart Thermometer'
    }, [])
    
    const PF = 'http://localhost:3000/assets/'
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [badge, setBadge] = useState(true)
    const [amount, setAmount] = useState(1)
    if(amount < 1) {
        setAmount(1)
    }
    const amHandler = (e) => {
        const reg = /^\d+$/;
        if(!reg.test(e.target.value)) {
            return false;
        } else {
            setAmount(e.target.value) 
        }
    }
    const [showAnswer, setShowAnswer] = useState(null)
    const faqsToggle = (e) => {
        showAnswer === e ? setShowAnswer(null) : setShowAnswer(e)
    }
    const year = new Date().getFullYear()

    return (
        <div className='overview'>
            <Sidebar />
            <div className="overview__content">
                <Navbar value={true} badge={badge}/>
                <div className="overview__inside">
                    <div className="overviewWrapper">
                        <div className="overviewThermometer">
                            <div className="overviewSwiper">
                                <Swiper
                                style={{
                                    "--swiper-navigation-color": "#000",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="swiperThermMain"
                                >
                                    {thermSwiper.map((el) => (
                                        <SwiperSlide key={el.id}>
                                            <img className='swiperImg' src={`${PF}`+ el.img} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={0}
                                slidesPerView={5}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="swiperLow"
                                >
                                    {thermSwiper.map((el) => (
                                        <SwiperSlide key={el.id}>
                                            <img className='swiperImglow' src={`${PF}` + el.img} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {infoTherm.map((inf) => (
                                <div className="thermInfo" key={inf.id}>
                                    <div className="therm__characteristics">
                                        {inf.characteristics.map((char, index) => ( 
                                            <p className='therm__characteristics-item' key={index}>{char}</p>
                                        ))}
                                    </div>
                                    <h1 className='therm__title'>{inf.title}</h1>
                                    <Link to={`${inf.ratingLink}`}>
                                        <img className='therm__rating' src={`${PF}` + inf.rating} alt="ratingTherm" />
                                    </Link>
                                    <div className="therm__price">
                                        <h1 className='term__priceNow'>${inf.priceNow}</h1>
                                        <p className='term__priceWas'>${inf.priceWas}</p>
                                    </div>
                                    <div className="therm__buttons">
                                        <div className="therm__buttonsCalc">
                                            <button className='button__amMinus' onClick={() => setAmount(amount-1)}>-</button>
                                            <input className='therm__am' type='text' value={amount} onChange={(e) => amHandler(e)}/>
                                            <button className='button__amPlus' onClick={() => setAmount(amount+1)}>+</button>
                                        </div>
                                        <button className="addTherm__butt">Add to Cart</button>
                                    </div>
                                    <p className='therm__returnPeriod'>{inf.return}</p>
                                    <div className="therm__desc">
                                        {inf.desc.map((d, index) => (
                                            <p className='therm__desc-item' key={index}>{d}</p>
                                        ))}
                                    </div>
                                    <p className='therm__extra'>{inf.extra}</p>
                                </div>
                            ))}
                        </div>
                        <div className="overviewVideo">
                            <h1 className='overviewVideo__title'>Take the guesswork out of cooking</h1>
                            <p className='overviewVideo__desc'>The Yummly wireless meat thermometer sets you up for cooking success. With convenient app-based cooking assistance, timers, and alerts, you can be confident in your cooking — even when you're multitasking.</p>
                            <video className='videoPlayer' controls poster={`${PF}images/videos/poster.jpg`}>
                                <source src={`${PF}images/videos/thermometrVideo.mp4`} type='video/mp4' />
                            </video>
                        </div>
                        <Advantages />
                    </div>
                    <div className="overviewFeatures">
                        <div className="featuresWrapper">
                            <div className="overviewFeatures__content">
                                <div>
                                    <span className='small__topTitle'>key features</span>
                                    <h1 className='therm__title'>Smart cooking done right</h1>
                                </div>
                                <div className="features__list">
                                    {features.map((f) => (
                                        <div className="features__list-item" key={f.id}>
                                            <img className='featureIcon' src={`${PF}` + f.img} alt="featureIcon" />
                                            <div className="feature__text">
                                                <h1 className='feature__title'>{f.title}</h1>
                                                <p className='feature__desc'>{f.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="howitWorks">
                        <div className="overviewWrapper">
                            <div className="howitWorks__content">
                                <span className='small__topTitle'>COOKING WITH THE APP</span>
                                <h1 className='therm__title'>How It Works</h1>
                                <Swiper watchSlidesProgress={true} slidesPerView={3}>
                                    {howitWorks.map((step) => (
                                        <SwiperSlide className='howitWorks__step' key={step.id}>
                                            <img className='stepImg' src={`${PF}` + step.img} alt="stepImg" />
                                            <p className='stepText'>{step.id}. {step.step}</p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="techSpecs">
                        <div className="overviewWrapper">
                            {techSpecs.map((t) => (
                                <div className="techSpecs__content" key={t.id}>
                                    <img src={`${PF}` + t.img} alt="techSpecs" />
                                    <div className="techSpecs__text" key={t.id}>
                                        <span style={{marginBottom: '14px'}} className='small__topTitle'>{t.topTtl}</span>
                                        <h1 className='therm__title'>{t.title}</h1>
                                        <h1 style={{marginTop : "28px"}} className='therm__subTitle'>{t.subtitle1}</h1>
                                        <span className='therm__spec' data-end={t.dimensions1}>Dimensions</span>
                                        <span className='therm__spec'>Cooking temperature range</span>
                                        {t.temp.map((line, i) => (
                                            <p key={i} className='temperature__line'>{line}</p>
                                        ))}
                                        <span className='therm__spec' data-end={t.battery1}>Rechargeable internal battery</span>
                                        <span className='therm__spec' data-end={t.battery1}>Water-resistant probe thermometer </span>
                                        <span className='therm__spec' data-end={t.materials}>Materials</span>
                                        <span className='therm__spec' data-end={t.bluetooth}>Bluetooth® wireless</span>
                                        <h1 style={{marginTop : "18px"}} className='therm__subTitle'>{t.subtitle2}</h1>
                                        <span className='therm__spec' data-end={t.dimensions2}>Dimensions</span>
                                        <span className='therm__spec' data-end={t.range}>Range</span>
                                        <span className='therm__spec' data-end={t.range}>Batteries</span>
                                        <span className='therm__spec' data-end={t.magn}>Magnetic base</span>
                                        <span className='therm__spec'>{t.lid}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="faqs">
                        <div className="overviewWrapper">
                            <div className="faqs__container">
                                <h1 className='faqs__topTitle'>FAQs</h1>
                                <div className="faqs__boxes">
                                    {faqs.map((f) => (
                                        <div className={showAnswer === f.id ? "faqs__boxes-item show" : "faqs__boxes-item"} key={f.id} onClick={() => faqsToggle(f.id)}>
                                            <div className="faqs__boxes-itemQ">
                                                <span className='showIcon'>{showAnswer === f.id ? '-' : '+'}</span>
                                                <h1 className='showQuestion'>{f.question}</h1>
                                            </div>
                                            <div className={showAnswer === f.id ? "faqs__boxes-itemA show" : "faqs__boxes-itemA"}>
                                                {f.text.map((t) => (
                                                    <p className='faqs__text' key={t.id}>{t.t}</p>
                                                ))}
                                                <ul className='faqs__points'>
                                                    {f.points ? f.points.map((pnt) => (
                                                        <li className='faqs__points-item' key={pnt.id}>{pnt.point}</li>
                                                    )) : null}
                                                </ul>
                                                {f.butt ? 
                                                    f.butt.map((b) => (
                                                    <Link to={b.link} key={b.id}><button className='learnMore__btn'>{b.t}</button></Link>
                                                )): null}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bannerAdd">
                        <div className="bannerAdd__content">
                            <h1>Take the guesswork out of cooking.</h1>
                            <button>Add To Cart</button>
                        </div>                            
                    </div>
                    <div className="thermFooter">
                        <div className="thermFooter__content">
                            <ul className='thermFooter__nav'>
                                {footerTherm.map((ftr) => (
                                    <Link className='thermFooter__nav-item' to={ftr.link} key={ftr.id}>
                                        {ftr.el}
                                    </Link>
                                ))}
                            </ul>
                            <p className='thermFooter__rights'>®/™©{year} vanekCorporation. All rights reserved.</p>
                            <div className="thermFooter_loc">
                                <p>This online merchant is located in the United States at 883 E. San Carlos Ave. San Carlos, CA 94070.</p>
                                <p>MSRP is the Manufacturer's Suggested Retail Price, which may differ from actual selling prices in your area.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;