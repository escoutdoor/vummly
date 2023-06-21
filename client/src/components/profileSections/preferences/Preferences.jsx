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

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/preferences/${user._id}`).then((p) => {
                setDiets(p.data.diets)
                setAllergies(p.data.allergies)
            })
        }
        fetch()
    }, [])

    return (
        <div className={s.preferences}>
            <Diets user={user} active={active === 'diets' ? true : false} setActive={setActive} diets={diets} setDiets={setDiets}/>
            <Allergies user={user} active={active === 'allergies' ? true : false} setActive={setActive} allergies={allergies} setAllergies={setAllergies}/>
            <Disliked user={user} active={active} setActive={setActive}/>
            <Cuisines user={user} active={active} setActive={setActive}/>
            <Goals user={user} active={active} setActive={setActive}/>
        </div>
    );
};

export default Preferences;