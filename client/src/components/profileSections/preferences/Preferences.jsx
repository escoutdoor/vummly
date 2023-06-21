import { useState } from 'react';
import s from './preferences.module.css'
import Diets from './diets/Diets';
import Allergies from './allergies/Allergies';
import Disliked from './disliked/Disliked';
import Cuisines from './cuisines/Cuisines';
import Goals from './goals/Goals';

const Preferences = ({user}) => {
    const [active, setActive] = useState("")

    return (
        <div className={s.preferences}>
            <Diets user={user} active={active} setActive={setActive}/>
            <Allergies user={user} active={active} setActive={setActive}/>
            <Disliked user={user} active={active} setActive={setActive}/>
            <Cuisines user={user} active={active} setActive={setActive}/>
            <Goals user={user} active={active} setActive={setActive}/>
        </div>
    );
};

export default Preferences;