import { advatages } from './../../helpers/thermometer/adavantages';
import {Link} from 'react-router-dom'
import './advantages.css'

const Advantages = () => {

    const PF = 'http://localhost:3000/assets/'
    return (
        <div className='advantages'>
            {advatages.map((adv) => (
                <div className="advantages__item" style={{flexDirection: `${adv.flexDir}`}} key={adv.id}>
                    <img className='advantageImg' src={`${PF}` + adv.img} alt="advanatageImg" />
                    <div className="advantages__itemText">
                        <span className='advantageMade'>{adv.madefor}</span>
                        <h1 className='advantageTitle'>{adv.title}</h1>
                        <p className='advantageDescr'>{adv.description}</p>
                        <p className='advantageExtra'>{adv.extra}</p>
                        <div className="addPack">
                            {adv.addtocart ? adv.addtocart.map((pack) => (
                                <div className="addPack-item" key={pack.id}>
                                    <span className='addPack__number'>{pack.num}-PACK</span>
                                    <div className="addPack-item__price">
                                        <h1 className='priceNow'>${pack.priceNow}</h1>
                                        <p className='priceWas'>${pack.priceWas}</p>
                                    </div>
                                    <button className='pack__butt'>Add to cart</button>
                                </div>
                            )):null}
                        </div>
                        {adv.details ? <p className='packDet'>{adv.details}</p> : null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Advantages;