import axios from 'axios';
import { allergiesMenu } from '../../../../helpers/preferences/preferences';
import s from './allergies.module.css'
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'

const Allergies = ({user, active, setActive, allergies, setAllergies, loaded}) => {

    const PF = process.env.REACT_APP_BASE_URL;
    const [defaultAllergies, setDefaultAllergies] = useState([])

    const deleteAllergy = async (allergy) => {
        if(allergy && user._id) {
            await axios.put(`/preferences/deleteAllergy/${user._id}`, {
                title: allergy
            }).then((a) => {
                setAllergies(a.data.allergies)
            })
        }
    }


    const addAllergy = async (allergy) => {
        if(user._id && allergy.title.trim().length !== 0) {
            await axios.put(`/preferences/addAllergy/${user._id}`, {
                title: allergy.title,
            }).then((a) => [
                setAllergies(a.data.allergies)
            ])
        }
    }


    useEffect(() => {
        setDefaultAllergies([...allergiesMenu].filter(a => !allergies.find(allergy => allergy === a.title)))
    }, [allergies])
    


    return (
        <div className={s.block}>
            <div className={s.header}>
                <h2 className={s.header__title}>Allergies</h2>
                <p className={s.description}>Select from the allergies below and we will only show you recipes that match.</p>
            </div>
            <div className={s.main}>
                <div className={s.topbar}>
                    {!loaded && new Array(3).fill(0).map((s, i) => (<Skeleton key={i} height={150} width={150} circle={true}/>))}
                    {loaded && allergies.map((a, index) => (
                        <div className={s.bubble} style={{width: '150px', height: '150px'}} key={index} onClick={() => {deleteAllergy(a)}}>
                            <img className={s.bubbleImg} src={`${PF}images/icons/profile/preferences/${a.toLowerCase().replace(" ", "").split("-")[0]}.svg`} alt="dietImg" />
                            <h3 className={s.bubble__title}>{a}</h3>
                            <div className={s.delete}>
                                <img src={`${PF}images/icons/profile/trashActive.svg`} alt="" />
                                <h1>delete</h1>
                            </div>
                        </div>
                    ))}
                    <div onClick={() => {setActive(active ? "" : 'allergies')}} className={s.addButton}>
                        <img className={s.plusIcon} src={`${PF}images/icons/profile/preferences/plus.svg`} alt="addButtonImg" />
                        <h2 className={s.bubble__title}>add allergies</h2>
                    </div>
                </div>
                <div className={active ? `${s.menu} ${s.active}` : s.menu}>
                    <div className={s.menu__content}>
                        {defaultAllergies.length !== 0 ? defaultAllergies.map((a) => (
                            <div className={s.bubble} key={a.id} onClick={() => {addAllergy(a)}}>
                                <img className={s.bubbleImg} src={`${PF}images/icons/profile/preferences/${a.title.toLowerCase().replace(" ", "").split("-")[0]}.svg`} alt="dietImg" />
                                <h3 className={s.bubble__title}>{a.title}</h3>
                                {a.description ? <p className={s.bubble__description}>({a.description})</p> : null}
                            </div>
                        )) : <h2 className={s.header__title}>There are no more allergies</h2>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allergies;