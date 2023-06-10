import { useNavigate, useParams } from 'react-router-dom';
import s from './profile.module.css'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/userSlice';
import ProfileSkeleton from '../../components/profileSkeleton/ProfileSkeleton';

const Profile = () => {
    const PF = process.env.REACT_APP_BASE_URL;
    const nav = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [activeDescription, setActiveDescription] = useState(false)
    const [description, setDescription] = useState("")
    const [activeName, setActiveName] = useState(false)
    const [name, setName] = useState("")
    const descInput = useRef()
    const nameInput = useRef()

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/${id.split("-")[1]}`).then((user) => {
                setUser(user.data);
                setLoaded(true)
            })
        }
        fetch()
    }, [id])

    const logOut = () => {
        dispatch(logout())
        localStorage.removeItem('_auth')
        nav('/')
        window.location.reload()
    }

    useEffect(() => {
        if(activeDescription) {
            descInput.current.focus()
        }
    }, [activeDescription])

    useEffect(() => {
        if(activeName) {
            setName(user.name)
            nameInput.current.focus()
        }
    }, [activeName])

    return (
        <div className={s.profile} onClick={() => {setActiveDescription(false); setActiveName(false)}}>
            <div className="wrap1160">
                <div className={s.content}>
                    {!loaded ? <ProfileSkeleton /> : 
                        <div className={s.user}>
                            <div className={s.userLeft}>
                                <div className={s.userAvatar}>
                                    <img className={s.image} src={user.avatar ? `${PF}images/avatars/${user.avatar}` : `${PF}images/avatars/avatar.png`} />
                                    <div className={s.avatarClick}>
                                        <input className={s.inputAvatar} type="file" accept="image/*"  onChange={() => {}}/>
                                    </div>
                                </div>
                                {localStorage.getItem('_auth') ? <button onClick={() => logOut()} className={s.logout}>Log Out</button> : null}
                            </div>                        
                            <div className={s.userRight}>
                                <div className={s.editName} onClick={(e) => e.stopPropagation()}>
                                    <h1 onClick={() => setActiveName(true)} className={activeName ? `${s.username} ${s.active}` :  s.username}>{user.name}</h1>
                                    <input ref={nameInput} type="text" value={name} className={activeName ? `${s.nameInput} ${s.active}` : s.nameInput} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className={s.editText} onClick={(e) => e.stopPropagation()}>
                                    <p onClick={() => setActiveDescription(true)} className={!activeDescription ? `${s.editText__target} ${s.active}` : s.editText__target}>{user.description ? user.description : 'Tell us about yourself here'}</p>
                                    <div className={activeDescription ? `${s.description} ${s.active}`  : s.description}>
                                        <textarea ref={descInput} placeholder='Tell us about yourself here' className={s.descriptionInput} maxLength={80} onChange={(e) => setDescription(e.target.value)} value={description} />
                                        <span>{`${description.length}/80`}</span>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;