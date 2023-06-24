import { useEffect, useState } from 'react';
import s from './preferences.module.css'
import Diets from './diets/Diets';
import Allergies from './allergies/Allergies';
import Disliked from './disliked/Disliked';
import Cuisines from './cuisines/Cuisines';
import Goals from './goals/Goals';
import axios from 'axios';

const Preferences = ({user}) => {
    const [active, setActive] = useState("")
    const [diets, setDiets] = useState([])
    const [allergies, setAllergies] = useState([])
    const [disliked, setDisliked] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/preferences/${user._id}`).then((p) => {
                setDiets(p.data.diets)
                setAllergies(p.data.allergies)
                setDisliked(p.data.disliked)
                setIngredients(p.data.ingredients)
                setLoaded(true)
            })
        }
        fetch()
    }, [])

    return (
        <div className={s.preferences}>
            <Diets user={user} loaded={loaded} active={active === 'diets'} setActive={setActive} diets={diets} setDiets={setDiets}/>
            <Allergies user={user} loaded={loaded} active={active === 'allergies'} setActive={setActive} allergies={allergies} setAllergies={setAllergies}/>
            <Disliked user={user} ingredients={ingredients} loaded={loaded} active={active === 'disliked'} setActive={setActive} disliked={disliked} setDisliked={setDisliked}/>
            <Cuisines user={user} loaded={loaded} active={active} setActive={setActive}/>
            <Goals user={user} loaded={loaded} active={active} setActive={setActive}/>
        </div>
    );
};

export default Preferences;