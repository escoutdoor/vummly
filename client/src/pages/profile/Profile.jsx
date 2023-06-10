import { useNavigate, useParams } from 'react-router-dom';
import s from './profile.module.css'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/userSlice';
import ProfileSkeleton from '../../components/profileSkeleton/ProfileSkeleton';
import SavedRecipes from '../../components/profileSections/savedRecipes/SavedRecipes';
import Preferences from '../../components/profileSections/preferences/Preferences';
import Settings from '../../components/profileSections/settings/Settings';

const Profile = () => {
    const PF = process.env.REACT_APP_BASE_URL;
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [isMe, setIsMe] = useState(false)
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [section, setSection] = useState("saved recipes")

    const [activeName, setActiveName] = useState(false)
    const [activeDescription, setActiveDescription] = useState(false)
    const [activeCity, setActiveCity] = useState(false)
    const [activeCountry, setActiveCountry] = useState(false)

    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const descInput = useRef()
    const nameInput = useRef()

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/${id.split("-")[1]}`).then((user) => {
                setUser(user.data);
            })
        }
        fetch()
    }, [id])

    useEffect(() => {
        const fetchme = async () => {
            await axios.get(`/user/getUser/${JSON.parse(localStorage.getItem('_auth'))}`).then((me) => {
                me.data?._id === user?._id ? setIsMe(true) : setIsMe(false)
                setLoaded(true)
            })
        }
        localStorage.getItem('_auth') && fetchme()
    }, [user])

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
        <div className={s.profile} onClick={() => {setActiveDescription(false); setActiveName(false); setActiveCity(false); setActiveCountry(false)}}>
            <div className="wrap1160">
                <div className={s.content}>
                    {!loaded ? <ProfileSkeleton /> : 
                        <div className={s.user}>
                            <div className={s.userLeft}>
                                <div className={s.userAvatar}>
                                    <img className={s.image} src={`${PF}images/avatars/${user.avatar}` || `${PF}images/avatars/avatar.png`} />
                                    <div className={s.avatarClick}>
                                        <input className={s.inputAvatar} type="file" accept="image/*"  onChange={() => {}}/>
                                    </div>
                                </div>
                                {isMe ? <button onClick={() => logOut()} className={s.logout}>Log Out</button> : null}
                            </div>                        
                            <div className={s.userRight}>
                                <div className={s.editName} onClick={(e) => e.stopPropagation()}>
                                    <h1 onClick={() => setActiveName(true)} className={activeName ? `${s.username} ${s.active}` :  s.username}>{user?.name}</h1>
                                    <input ref={nameInput} type="text" value={name} className={activeName ? `${s.nameInput} ${s.active}` : s.nameInput} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className={s.editText} onClick={(e) => e.stopPropagation()}>
                                    <p onClick={() => setActiveDescription(true)} className={!activeDescription ? `${s.editText__target} ${s.active}` : s.editText__target}>{user?.description || 'Tell us about yourself here'}</p>
                                    <div className={activeDescription ? `${s.description} ${s.active}`  : s.description}>
                                        <textarea ref={descInput} placeholder='Tell us about yourself here' className={s.descriptionInput} maxLength={80} onChange={(e) => setDescription(e.target.value)} value={description} />
                                        <span>{`${description.length}/80`}</span>
                                    </div>
                                </div>
                                <div className={s.location} onClick={e => e.stopPropagation()}>
                                    <div className={s.locationItem} onClick={() => { setActiveCity(true); setActiveCountry(false)}}>
                                        <input placeholder='City' type="text" className={activeCity ? `${s.editLocation} ${s.active}` : s.editLocation} onChange={(e) => setCity(e.target.value)} value={city}/>
                                        <p className={activeCity ? `${s.locationTextCity} ${s.active}` : s.locationTextCity} >{user?.city || 'City'}</p>
                                    </div>,
                                    <div className={s.locationItem} onClick={() => {setActiveCity(false); setActiveCountry(true)}}>
                                        <input placeholder='Country' type="text" className={activeCountry ? `${s.editLocation} ${s.active}` : s.editLocation} onChange={(e) => setCountry(e.target.value)} value={country}/>
                                        <p className={activeCountry ? `${s.locationTextCountry} ${s.active}` : s.locationTextCountry}>{user?.country || 'Country'}</p>
                                    </div>
                                </div>
                            </div> 
                        </div>}
                        <ul className={s.navbar}>
                            <li onClick={() => setSection('saved recipes')} className={section === 'saved recipes' ? `${s.navbar__item} ${s.active}` : s.navbar__item}>saved recipes</li>
                            <li onClick={() => setSection('preferences')} className={section === 'preferences' ? `${s.navbar__item} ${s.active}` : s.navbar__item}>preferences</li>
                            <li onClick={() => setSection('settings')} className={section === 'settings' ? `${s.navbar__item} ${s.active}` : s.navbar__item}>settings</li>
                        </ul>
                        <div className={s.section}>
                            {
                                section === 'saved recipes' ? <SavedRecipes user={user}/> :
                                section === 'preferences' ? <Preferences user={user}/> : 
                                section === 'settings' ? <Settings user={user} /> :
                                null
                            }
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;