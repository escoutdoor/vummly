import { useState } from 'react';
import s from './diets.module.css'
import axios from 'axios';

const Diets = ({user, active, setActive}) => {
    const [diets, setDiets] = useState([])
    const PF = process.env.REACT_APP_BASE_URL;

    const [defaultDiets, setDefaultDiets] = useState([
        {id: 1, title: 'Vegetarian', description: 'no meat, no eggs'},
        {id: 2, title: 'Low fodmap', description: ''},
        {id: 3, title: 'Vegetarian', description: 'no meat, no dairy'},
        {id: 4, title: 'Vegetarian', description: ''},
        {id: 5, title: 'Vegan', description: ''},
        {id: 6, title: 'Palfo', description: ''},
        {id: 7, title: 'Pescetarian', description: ''},
        {id: 8, title: 'Ketogenic', description: ''},
    ])

    const deleteDiet = async (diet) => {
        await axios.delete('').then((diets) => {
            setDiets(diets.data)
        }, )
    }
    
    return (
        <div className={s.block}>
            <div className={s.header}>
                <h2 className={s.header__title}>Diets</h2>
                <p className={s.header__description}>Select from the diets below and we will only show you recipes that match.</p>
            </div>
            <div className={s.main}>
                <div className={s.topbar}>
                    {diets.map((d) => (
                        <div onClick={() => deleteDiet(d)}>

                        </div>
                    ))}
                    <div onClick={() => setActive(!active)} className={s.addButton}>
                        <img className={s.plusIcon} src={`${PF}images/icons/profile/plus.svg`} alt="addButtonImg" />
                        <h2 className={s.addButton__title}>add diets</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Diets;