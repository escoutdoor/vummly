import s from './passwordPage.module.css'
import { Link } from 'react-router-dom';
import { Rating, Star} from '@smastrom/react-rating'
import Skeleton from 'react-loading-skeleton';

const PasswordPage = ({setPage, password, passwordHandler, passwordError, login, logInUser}) => {

    
    const ratingStars = {
        itemShapes: Star,
        activeFillColor: '#e16120', 
        inactiveFillColor: '#f1f1f1'
    }

    const goNext = (event) => {
        event.key === 'Enter' && password && !passwordError && !login && setPage('name')
    }


    return (
        <div className={s.password} onKeyDown={goNext}>
            <button className={s.back} onClick={() => setPage('email')}>back</button>
            <h1 className={s.title}>Cooks love us!</h1>
            <Rating halfFillMode='svg' className={s.ratingStars} readOnly={true} value={4.5} itemStyles={ratingStars} />
            <p className={s.subtitle}>We're rated 4.5 out of 5 stars because our users have so much success finding recipes they love.</p>
            <div className={s.password}>
                <input type="password" className={s.input} value={password} onChange={(e) => passwordHandler(e.target.value)} placeholder='Password'/>
                <div className={password && passwordError ? `${s.alert} ${s.active}` : s.alert}><p className={password && passwordError ? `${s.alertText} ${s.active}` :  s.alertText}>{passwordError}</p></div>
            </div>
            <button title='Next' className={s.nextButton} onClick={() => {!login && password && !passwordError && setPage('name'); login && password && !passwordError && logInUser()}}>{login ? 'Log In' : 'Next'}</button>
            <div className={s.footer}>By clicking Next, you accept our <Link to={'/privacy'} className={s.termsLink}>Terms of Use</Link> and <Link to={'/privacy'} className={s.termsLink}>Privacy Notice</Link></div>
        </div>
    );
};

// !passwordError && password && login ? logInUser() : !passwordError && password && !login ? setPage('name') : console.log("It's pizdez my friend")

export default PasswordPage;