import { useEffect, useState } from 'react';
import Information from './information/Information';
import s from './settings.module.css'
import axios from 'axios';
import AccountSettings from './accountSettings/AccountSettings';

const Settings = ({user}) => {
    const [gender, setGender] = useState("")
    const [level, setLevel] = useState("")
    const [people, setPeople] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/settings/${user._id}`).then((s) => {
                setGender(s.data.gender)
                setLevel(s.data.cookingLevel)
                setPeople(s.data.people)
                setLoaded(true)
            })
        }

        user._id && fetch()
    }, [user])

    return (
        <div className={s.settings}>
            <Information loaded={loaded} user={user} gender={gender} setGender={setGender} level={level} setLevel={setLevel} people={people} setPeople={setPeople}/>
            <AccountSettings user={user}/>
        </div>
    );
};

export default Settings;