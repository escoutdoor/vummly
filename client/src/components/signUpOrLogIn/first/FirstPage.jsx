import s from './firstPage.module.css'
import {Link} from 'react-router-dom'

const FirstPage = ({setActive, setPage}) => {

    const PF = 'http://localhost:3000/assets/'

    return (
        <div className={s.first}>
            <img className={s.logo} src={`${PF}images/logo/yummlyLogo.svg`} alt="" />
            <div className={s.text}>
                <h1 className={s.title}>Your recipes are waiting</h1>
                <p className={s.subtitle}>Connect to customize your recipe discovery.</p>
            </div>
            <div className={s.loginButtons}>
                <button style={{backgroundImage: `url('${PF}images/icons/logInModal/google.webp')`, backgroundColor: '#fff', color: '#000'}} className={s.loginButton}>Connect with Google</button>
                <button onClick={() => setPage('second')} style={{backgroundImage: `url(${PF}images/icons/logInModal/mail.webp)`}} className={s.loginButton}>Connect with Email</button>
            </div>
            <div className={s.footer}>By connecting, you agree to our <Link to={'/privacy'} className={s.termsLink}>Terms of Use</Link> and <Link to={'/privacy'} className={s.termsLink}>Privacy Notice</Link></div>
            <button onClick={() => setActive(false)} className={s.close}>CLOSE & USE VUMMLY</button>
        </div>
    );
};

export default FirstPage;