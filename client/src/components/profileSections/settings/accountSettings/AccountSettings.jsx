import { useEffect, useRef, useState } from 'react';
import s from './accountSettings.module.css'
import axios from 'axios';

const AccountSettings = ({user, setUser}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const [activeMail, setActiveMail] = useState(false)
    const [activePassword, setActivePassword] = useState(false)
    const [mailError, setMailError] = useState("")
    const [users, setUsers] = useState([])
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const emailInput = useRef()

    useEffect(() => {
        if(activeMail) {
            emailInput.current.focus()
        }
    }, [activeMail])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/getAll`).then(users => setUsers(users.data))
        }
        fetch()
    }, [])

    useEffect(() => {
        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!pattern.test(mail)) {
            setMailError("Invalid email address")
        } else {
            setMailError("")
        }

        !mail && setMailError("you must enter your email address")
    }, [mail])

    useEffect(() => {
        (user.mail || user.password) && setMail(user.mail) && setPassword(user.password)
        users.find(u => u.mail === mail && u.mail !== user.mail) && setMailError("a user with that mail already exists")
    }, [user])
    

    const changeMail = async () => {
        if(user.mail && user.mail !== mail && !mailError) {
            await axios.put(`/settings/mail/${user._id}`, {
                mail: mail
            }).then((u) => {
                setUser(u.data)
                setActiveMail(false)
            })
        }
    }

    const onEnterMail = (e) => {
        e.key === 'Enter' && changeMail()
    }

    return (
        <div className={s.main}>
            <h1 className={s.title}>Account Settings</h1>
            <div className={s.boxes}>
                <div className={s.box} >   
                    <div className={activeMail ? `${s.edit} ${s.active}` : s.edit} >
                        <div className={s.target} onClick={() => {setActiveMail(true)}}>
                            <h1 className={activeMail ? `${s.inputValue} ${s.active}` : s.inputValue}>{user.mail}</h1>
                            <input onKeyDown={(e) => onEnterMail(e)} maxLength={60} value={mail} ref={emailInput} onChange={(e) => setMail(e.target.value) } type="email" className={activeMail ? `${s.input} ${s.active}` : s.input}/>
                        </div>
                        <img onClick={() => {setActiveMail(!activeMail); setMail(user.mail)}} className={activeMail ? `${s.closeIcon} ${s.active}` :  s.closeIcon} src={`${PF}images/icons/profile/${activeMail ? 'x' : 'edit'}.svg`} alt="closeIcon" />
                        {activeMail ? <img onClick={() => {changeMail()}} className={s.confirm} src={`${PF}images/icons/profile/confirm.svg`} alt="confirm" /> : null}
                    </div>
                    <h1 className={mailError ? `${s.error} ${s.active}` : s.error}>{mailError}</h1>
                    <h1 className={activeMail ? `${s.inputName} ${s.active}` : s.inputName}>email</h1>
                </div>
                <div className={s.box} >   
                    <div className={s.edit}  >
                        <div className={s.target} onClick={() => setActivePassword(true)}>
                            <h1 className={s.inputValue}>password</h1>
                            <input value={password} onChange={(e) => setPassword(e.target.value) } type="password" className={s.input}/>
                        </div>
                        <img onClick={() => setActivePassword(false)} className={s.closeIcon} src={`${PF}images/icons/profile/x.svg`} alt="closeIcon" />
                    </div>
                    <h1 className={s.inputName}>password</h1>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;