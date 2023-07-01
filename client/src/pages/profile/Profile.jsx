import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import s from './profile.module.css'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from '../../redux/features/userSlice';
import ProfileSkeleton from '../../components/profileSkeleton/ProfileSkeleton';
import SavedRecipes from '../../components/profileSections/savedRecipes/SavedRecipes';
import Preferences from '../../components/profileSections/preferences/Preferences';
import Settings from '../../components/profileSections/settings/Settings';
import {useSelector} from 'react-redux'

const Profile = () => {
    const PF = process.env.REACT_APP_BASE_URL;
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [isMe, setIsMe] = useState(false)
    const {id} = useParams()

    const loggedInUser = useSelector(selectUser)

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

    const [avatar, setAvatar] = useState(null)

    const updateAvatar = async () => {
        const data = new FormData()

        data.append('avatar', avatar)

        await axios.put(`/upload/avatar/${user._id}`, data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }).then((d) => {
            setUser(d.data)
            dispatch(login(d.data))
        })
    }

    useEffect(() => {
        avatar && updateAvatar()
    }, [avatar])

    const descInput = useRef()
    const nameInput = useRef()
    const countryInput = useRef()
    const cityInput = useRef()

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/${id.split("-")[1]}`).then((user) => {
                setUser(user.data);
            })
            setLoaded(true)   
        }
        fetch()
    }, [id])

    useEffect(() => {
        if(user) {
            setDescription(user?.description)
            setName(user?.name)
            setCountry(user?.country)
            setCity(user?.city)
        }
    }, [user])

    useEffect(() => {
        document.title = user?.name ? `${user.name} on Vummly` : 'Vummly'
    }, [user])

    useEffect(() => {
        loggedInUser?._id === user?._id ? setIsMe(true) : setIsMe(false)
    }, [user, loggedInUser])

    const logOut = () => {
        dispatch(logout())
        localStorage.removeItem('_auth')
        nav('/')
        window.location.reload()
    }

    useEffect(() => {
        if(activeName) {
            nameInput.current.focus()
        } else if(activeDescription) {
            descInput.current.focus()
        } else if(activeCountry) {
            countryInput.current.focus()
        } else if(activeCity) {
            cityInput.current.focus()
        }
    }, [activeName, activeDescription, activeCountry, activeCity])

    const handleChanges = async () => {
        if(user.name !== name && name?.length !== 0) {
            await axios.put(`/user/username/${user._id}/${user.mail}`, {
                name: name
            }).then((u) => {nav(`/profile/${u.data.name}-${u.data._id}`); setUser(u.data)})
        } else {
            setName(user.name)
        }
        if(user.description !== description) {
            await axios.put(`/user/description/${user._id}/${user.mail}`, {
                description: description
            }).then((u) => setUser(u.data))
        }
        if(user.city !== city) {
            await axios.put(`/user/city/${user._id}/${user.mail}`, {
                city: city
            }).then((u) => setUser(u.data))
        }
        if(user.country !== country) {
            await axios.put(`/user/country/${user._id}/${user.mail}`, {
                country: country
            }).then((u) => setUser(u.data))
        }
    }



    return (
        <div className={s.profile} onClick={() => {setActiveCity(false); setActiveCountry(false);}} onBlur={() => {setActiveDescription(false); setActiveName(false); handleChanges()}}>
            <div className="wrap1160">
                <div className={s.content}>
                    {!loaded ? <ProfileSkeleton /> : 
                        <div className={s.user}>
                            <div className={s.userLeft}>
                                <div className={s.userAvatar}>
                                    <img className={s.image} src={user?.avatar ? `${PF}images/avatars/${user.avatar}` : `${PF}images/avatars/no-avatar.webp`}/>
                                    {isMe && <div className={s.avatarClick}>
                                        <input className={s.inputAvatar} type="file" onChange={(e) => setAvatar(e.target.files[0])}/>
                                    </div>}
                                </div>
                                {isMe && <button onClick={() => logOut()} className={s.logout}>Log Out</button>}
                            </div>                        
                            <div className={s.userRight}>
                                {isMe ? <div className={s.editName} onClick={(e) => e.stopPropagation()}>
                                    <h1 onClick={() => setActiveName(true)} className={activeName ? `${s.username} ${s.active}` :  s.username}>{name}</h1>
                                    <input ref={nameInput} type="text" value={name} className={activeName ? `${s.nameInput} ${s.active}` : s.nameInput} onChange={(e) => setName(e.target.value)} />
                                </div> : <h1 className={`${s.username} ${s.me}`}>{user?.name}</h1>}
                                {isMe ? <div className={s.editText} onClick={(e) => e.stopPropagation()}>
                                    <p onClick={() => setActiveDescription(true)} className={!activeDescription ? `${s.editText__target} ${s.active}` : s.editText__target}>{user?.description || 'Tell us about yourself here'}</p>
                                    <div className={activeDescription ? `${s.description} ${s.active}`  : s.description}>
                                        <textarea ref={descInput} value={description} placeholder='Tell us about yourself here' className={s.descriptionInput} maxLength={80} onChange={(e) => setDescription(e.target.value)} />
                                        <span>{`${description?.length}/80`}</span>
                                    </div>
                                </div> : user.description ?  <p className={`${s.editText__target} ${s.me}`}>{user.description}</p> : null}
                                {isMe ? <div className={s.location} onClick={(e) => e.stopPropagation()}>
                                    <div className={s.locationItem} >
                                        <input ref={cityInput} placeholder='City' type="text" className={activeCity ? `${s.editLocation} ${s.active}` : s.editLocation} onChange={(e) => setCity(e.target.value)} value={city}/>
                                        <p onClick={() => { setActiveCity(true);}} className={activeCity ? `${s.locationTextCity} ${s.active}` : s.locationTextCity} >{city || 'City'}</p>
                                    </div>,
                                    <div className={s.locationItem}  >
                                        <input ref={countryInput} placeholder='Country' type="text" className={activeCountry ? `${s.editLocation} ${s.active}` : s.editLocation} onChange={(e) => setCountry(e.target.value)} value={country}/>
                                        <p onClick={() => { setActiveCountry(true)}} className={activeCountry ? `${s.locationTextCountry} ${s.active}` : s.locationTextCountry}>{country || 'Country'}</p>
                                    </div>
                                </div> : 
                                    user.city || user.country ? <div className={s.location}>
                                        {city ? <p className={s.locationTextCity}>{city}</p> : null}
                                        {city && country && ','}
                                        {country ? <p className={s.locationTextCity}>{country}</p> : null}
                                    </div> : null
                                }
                            </div> 
                        </div>}
                        {isMe ? <div className={s.navigation}>
                            <ul className={s.navbar}>
                                <li onClick={() => setSection('saved recipes')} className={section === 'saved recipes' ? `${s.navbar__item} ${s.active}` : s.navbar__item}>saved recipes</li>
                                <li onClick={() => setSection('preferences')} className={section === 'preferences' ? `${s.navbar__item} ${s.active}` : s.navbar__item}>preferences</li>
                                <li onClick={() => setSection('settings')} className={section === 'settings' ? `${s.navbar__item} ${s.active}` : s.navbar__item}>settings</li>
                            </ul>
                            <div className={s.section}>
                                {
                                    section === 'saved recipes' ? <SavedRecipes isMe={isMe} user={user}/> :
                                    section === 'preferences' ? <Preferences user={user}/> : 
                                    section === 'settings' ? <Settings setUser={setUser} user={user} /> :
                                    null
                                }
                            </div>
                        </div> : <SavedRecipes user={user} isMe={isMe}/>}
                </div>
            </div>
        </div>
    );
};

export default Profile;