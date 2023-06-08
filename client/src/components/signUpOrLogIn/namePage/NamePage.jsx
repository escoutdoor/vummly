import { useState } from 'react';
import s from './namePage.module.css'
import { Rating, Star} from '@smastrom/react-rating'

const NamePage = ({setPage, name, nameHandler, nameError, createUser}) => {
    
    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }

    const goNext = (event) => {
        event.key === 'Enter' && name && !nameError && createUser()
    }

    const PF = 'http://localhost:3000/assets/'
    return (
        <div className={s.third} onKeyDown={goNext}>
            <div className={s.side} style={{backgroundImage: `url(${PF}images/icons/logInModal/third.webp)`}}>
                <button className={s.back} onClick={() => setPage('password')}>back</button>
                <h1 className={s.sideTitle}>Cooks love us!</h1>
                <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={4.5} itemStyles={ratingStars} />
                <p className={s.subtitle}>We're rated 4.5 out of 5 stars because our users have so much success finding recipes they love.</p>
            </div>
            <div className={s.main}>
                <h1 className={s.mainTitle}>How shall we greet you?</h1>
                <div className={s.name}>
                    <input type="text" onChange={(e) => nameHandler(e.target.value)} value={name} className={s.input} placeholder='Your Name'/>
                    <div className={name && nameError ? `${s.alert} ${s.active}` : s.alert}><p className={name && nameError ? `${s.alertText} ${s.active}` :  s.alertText}>name must be at least 3 characters long</p></div>
                </div>
                <button title='Next' className={s.nextButton} onClick={() => name && !nameError && createUser()}>Next</button>
            </div>
        </div>
    );
};

export default NamePage;