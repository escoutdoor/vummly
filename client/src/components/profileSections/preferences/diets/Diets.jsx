import { useEffect, useState } from 'react';
import s from './diets.module.css'
import axios from 'axios';
import { dietsMenu } from '../../../../helpers/preferences/preferences';
import Skeleton from 'react-loading-skeleton';

const Diets = ({user, active, setActive, diets, setDiets, loaded}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const [defaultDiets, setDefaultDiets] = useState([])

    const deleteDiet = async (diet) => {
        if(diet._id && user._id) {
            await axios.put(`/preferences/deleteDiet/${user._id}/${diet._id}`).then((d) => {
                setDiets(d.data.diets)
                
            })
        }
    }


    const addDiet = async (diet) => {
        if(user._id && diet.title.trim().length !== 0) {
            await axios.put(`/preferences/addDiet/${user._id}`, {
                title: diet.title,
                description: diet?.description
            }).then((d) => [
                setDiets(d.data.diets)
            ])
        }
    }


    useEffect(() => {
        setDefaultDiets([...dietsMenu].filter(d => !diets.find(diet => diet.title === d.title && diet.description === d.description)))
    }, [diets])
    

    return (
        <div className={s.block}>
            <div className={s.header}>
                <h2 className={s.header__title}>Diets</h2>
                <p className={s.description}>Select from the diets below and we will only show you recipes that match.</p>
            </div>
            <div className={s.main}>
                <div className={s.topbar}>
                    {!loaded && new Array(3).fill(0).map((s, i) => (<Skeleton key={i} height={150} width={150} circle={true}/>))}
                    {diets.map((d) => (
                        <div className={s.bubble} style={{width: '150px', height: '150px'}} key={d._id} onClick={() => {deleteDiet(d)}}>
                            <img className={s.bubbleImg} src={`${PF}images/icons/profile/preferences/${d.description !== '' ? `${d.title.toLowerCase()}-${d.description.split(" ").join("-").replace(",", "")}` : `${d.title.toLowerCase().replace(" ", "-")}`}.svg`} alt="dietImg" />
                            <h3 className={s.bubble__title}>{d.title}</h3>
                            {d.description ? <p className={s.bubble__description}>{d.description}</p> : null}
                            <div className={s.delete}>
                                <img src={`${PF}images/icons/profile/trashActive.svg`} alt="" />
                                <h1>delete</h1>
                            </div>
                        </div>
                    ))}
                    <div onClick={() => {setActive(active ? "" : 'diets')}} className={s.addButton}>
                        <img className={s.plusIcon} src={`${PF}images/icons/profile/preferences/plus.svg`} alt="addButtonImg" />
                        <h2 className={s.bubble__title}>add diets</h2>
                    </div>
                </div>
                <div className={active ? `${s.menu} ${s.active}` : s.menu}>
                    <div className={s.menu__content}>
                        {defaultDiets.length !== 0 ? defaultDiets.map((d) => (
                            <div className={s.bubble} key={d.id} onClick={() => {addDiet(d)}}>
                                <img className={s.bubbleImg} src={`${PF}images/icons/profile/preferences/${d.description !== '' ? `${d.title.toLowerCase()}-${d.description.split(" ").join("-").replace(",", "")}` : `${d.title.toLowerCase().replace(" ", "-")}`}.svg`} alt="dietImg" />
                                <h3 className={s.bubble__title}>{d.title}</h3>
                                {d.description ? <p className={s.bubble__description}>({d.description})</p> : null}
                            </div>
                        )) : <h2 className={s.header__title}>There are no more diets</h2>}
                    </div>
                    <p className={s.description}>*Consult with a medical or nutrition professional before starting any dietary program to determine if it is right for your needs.</p>
                </div>
            </div>

        </div>
    );
};

export default Diets;