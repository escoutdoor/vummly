import { useParams } from 'react-router-dom';
import s from './profile.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Profile = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetch = async () => {
            await axios.get(``).then(data => setUser(data.data))
            setLoading(true)
        }
        fetch()
    }, [])

    return (
        <div className={s.profile}>
            <div className={s.content}>
                
            </div>
        </div>
    );
};

export default Profile;