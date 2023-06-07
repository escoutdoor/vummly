import { useState } from 'react';
import s from './secondPage.module.css'
import { Rating, Star} from '@smastrom/react-rating'
import { Link } from 'react-router-dom';

const SecondPage = ({setPage, mailError, mail, setMail}) => {

    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }

    const goNext = (event) => {
        event.key === 'Enter' && mail && !mailError && setPage('third')
    }

    return (
        <div className={s.second} onKeyDown={goNext}>
            <button className={s.back} onClick={() => setPage('first')}>back</button>
            <h1 className={s.title}>Cooks love us!</h1>
            <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={4.5} itemStyles={ratingStars} />
            <p className={s.subtitle}>We're rated 4.5 out of 5 stars because our users have so much success finding recipes they love.</p>
            <div className={s.mail}>
                <input type="text" className={s.input} value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Email Address'/>
                <div className={mail && mailError ? `${s.alert} ${s.active}` : s.alert}><p className={mail && mailError ? `${s.alertText} ${s.active}` :  s.alertText}>check your email address</p></div>
            </div>
            <button title='Next' className={s.nextButton} onClick={() => mail && !mailError && setPage('third')}>Next</button>
            <div className={s.footer}>By clicking Next, you accept our <Link to={'/privacy'} className={s.termsLink}>Terms of Use</Link> and <Link to={'/privacy'} className={s.termsLink}>Privacy Notice</Link></div>
        </div>
    );
};

export default SecondPage;