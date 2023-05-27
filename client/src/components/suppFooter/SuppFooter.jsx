import './suppFooter.css'
import  {Link} from 'react-router-dom'

const SuppFooter = () => {
    return (
        <div className="suppFooter">
            <div className="supportWrap">
                <Link title='Home' to={'/support'}>
                    <p className="help__link">Yummly Help Center</p>
                </Link>
            </div>
        </div>
    );
};

export default SuppFooter;