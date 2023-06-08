import { useParams } from 'react-router-dom';
import s from './profile.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    console.log(id.split("-")[1]);

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/${id.split("-")[1]}`).then((user) => {
                setUser(user.data)
            })
        }
        fetch()
    }, [])

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <h1>{user.name}</h1>
            </div>
        </div>
    );
};

export default Profile;