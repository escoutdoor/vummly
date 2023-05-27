import './suppNavbar.css'
import {Link} from 'react-router-dom'

const SuppNavbar = () => {
    const PF = 'http://localhost:3000/assets/'
    return (
        <div className='suppNavbar'>
            <div className="supportWrap">
                <Link to={'/support'}>
                    <img src={`${PF}images/logo/yummlyLogo.svg`} alt="YummlyLogo" />
                </Link>
            </div>
        </div>
    );
};

export default SuppNavbar;