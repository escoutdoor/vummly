import { useEffect, useRef, useState } from 'react';
import s from './disliked.module.css'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';


const Disliked = ({user, active, setActive, disliked, setDisliked, loaded, ingredients}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const [defaultDisliked, setDefaultDisliked] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [activeTarget, setActiveTarget] = useState(false)
    const inputDisliked = useRef()

    const deleteDisliked = async (item) => {
        if(item && user._id) {
            await axios.put(`/preferences/deleteDisliked/${user._id}`, {
                title: item
            }).then((d) => {
                setDisliked(d.data.dislikedIngredients)
            })
        }
    }

    console.log(ingredients);

    const addDisliked = async (item) => {
        if(user._id && item.trim().length !== 0) {
            await axios.put(`/preferences/addDisliked/${user._id}`, {
                title: item,
            }).then((d) => [
                setDisliked(d.data.dislikedIngredients)
            ])
        }
    }

    const handleAddDisliked = (e) => {
        e.key === 'Enter' && !disliked.includes(e.target.value) && defaultDisliked.find(d => d.toLowerCase() === e.target.value.toLowerCase()) && addDisliked(e.target.value).then(() =>{setNewIngredient(""); setActiveTarget(false)})
    }

    useEffect(() => {
        if(activeTarget) {
            inputDisliked.current.focus()
        }
    }, [activeTarget])

    useEffect(() => {
        setDefaultDisliked([...ingredients].filter(ingr => !disliked.includes(ingr)))
    }, [disliked])


    return (
        <div className={s.block} onClick={() => setActiveTarget(false)}>
            <div className={s.header}>
                <h2 className={s.header__title}>Disliked Ingredients</h2>
                <p className={s.description}>Add disliked ingredients to avoid recipes that include them.</p>
            </div>
            <div className={s.main}>
                <div className={s.topbar}>
                    {!loaded && new Array(3).fill(0).map((s, i) => (<Skeleton key={i} height={150} width={150} circle={true}/>))}
                    {disliked.map((d, index) => (
                        <div className={s.bubble} style={{width: '150px', height: '150px'}} key={index} onClick={() => {deleteDisliked(d)}}>
                            <h3 style={{fontSize: '18px'}} className={s.bubble__title}>{d}</h3>
                            <div className={s.delete}>
                                <img src={`${PF}images/icons/profile/trashActive.svg`} alt="" />
                                <h1>delete</h1>
                            </div>
                        </div>
                    ))}
                    <div onClick={() => {setActive(active ? "" : 'disliked')}} className={s.addButton}>
                        <img className={s.plusIcon} src={`${PF}images/icons/profile/preferences/plus.svg`} alt="addButtonImg" />
                        <h2 className={s.bubble__title}>add disliked ingredients</h2>
                    </div>
                </div>
                <div className={active ? `${s.menu} ${s.active}` : s.menu}>
                    <div className={s.menu__content} onClick={(e) => e.stopPropagation()}>
                        <div className={s.addDisliked}>
                            <div  onClick={() => setActiveTarget(true)} className={activeTarget ? `${s.addDisliked__target} ${s.active}` : s.addDisliked__target}>
                                <span>+</span>
                                <h1>add disliked foods</h1>
                            </div>
                            <div className={s.addDisliked__choose}>
                                <div className={activeTarget ? `${s.inputBox} ${s.active}` : s.inputBox}>
                                    <input maxLength={30} ref={inputDisliked} onKeyDown={(e) => handleAddDisliked(e)} placeholder='add disliked foods' className={s.newIngredient__input} type="text" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)}/>
                                    <img onClick={() => {setActiveTarget(false); setNewIngredient("")}} className={s.close} src={`${PF}images/icons/profile/x.svg`} alt="closeIcon" />
                                </div>
                                <ul className={newIngredient && activeTarget ? `${s.dropdown} ${s.active}` : s.dropdown}>
                                    {defaultDisliked.filter(d => d.toLowerCase().includes(newIngredient.toLowerCase())).slice(0, 7).map((d, index) => (
                                        <li key={index} onClick={() => {addDisliked(d); setNewIngredient(""); setActiveTarget(false)}} className={s.dropdown__item}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={s.bubbles}>
                            {defaultDisliked.length !== 0 ? defaultDisliked.slice(0, 10).map((d, index) => (
                                <div className={s.bubble} key={index} onClick={() => {addDisliked(d)}}>
                                    <h3 className={s.bubble__title}>{d}</h3>
                                </div>
                            )) : <h2 className={s.header__title}>There are no more disliked ingredients, you can add yours</h2>}
                        </div>
                    </div>
                    <p className={s.description}>*Consult with a medical or nutrition professional before starting any dietary program to determine if it is right for your needs.</p>
                </div>
            </div>

        </div>
    );
};

export default Disliked;