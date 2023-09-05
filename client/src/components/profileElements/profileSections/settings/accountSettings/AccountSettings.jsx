import { useEffect, useRef, useState } from 'react';
import s from './accountSettings.module.css'
import axios from 'axios';

const AccountSettings = ({user, setUser}) => {
    const PF = process.env.REACT_APP_BASE_URL;
    const [mail, setMail] = useState("")
    const [activeMail, setActiveMail] = useState(false)
    const [mailError, setMailError] = useState("")
    const emailInput = useRef()

    const [users, setUsers] = useState([])

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)

    const [passwordError, setPasswordError] = useState("")
    const [newPasswordError, setNewPasswordError] = useState("")

    const [activePassword, setActivePassword] = useState(false)

    const [activeNewPassword, setActiveNewPassword] = useState(false)
    const [activeOldPassword, setActiveOldPassword] = useState(false)

    const oldInputPassword = useRef()
    const newInputPassword = useRef()


    useEffect(() => {
        if(activeMail) {
            emailInput.current.focus()
        } else if(activePassword) {
            oldInputPassword.current.focus()
        }
    }, [activeMail])
    
    useEffect(() => {
        setMail(user.mail)
    }, [user])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`/user/getAll`).then(users => setUsers(users.data))
        }
        fetch()
    }, [user])

    useEffect(() => {
        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!pattern.test(mail)) {
            setMailError("Invalid email address")
        } else {
            setMailError("")
        }

        !mail && setMailError("you must enter your email address")
        
        if(users.find(u => u.mail === mail)) {
            mail === user.mail ? setMailError("") : setMailError("a user with that mail already exists")
        }
    }, [mail])

    const changeMail = async () => {
        if(user.mail && user.mail !== mail && !mailError) {
            await axios.put(`/settings/mail/${user._id}`, {
                mail: mail
            }).then((u) => {
                setUser(u.data)
                setActiveMail(false)
            })
        } else if(user.mail === mail) {
            setActiveMail(false)
        }
    }

    const onEnterMail = (e) => {
        e.key === 'Enter' && changeMail()
    }

    const passwordHandler = (p) => {
        setNewPassword(p)
        if(!/(?=.*[A-Z])/.test(p)) {
            setNewPasswordError("Password should contain at least one capital char")
        } 
        else if(!/(?=.{7,40}$)/.test(p)) {
            setNewPasswordError("Password should be at least 7 characters")
        } 
        else if(!/[ -/:-@[-`{-~]/.test(p)) {
            setNewPasswordError("Password should contain at least one symbol")
        } 
        else if(!/(?=.*[0-9])/.test(p)) {
            setNewPasswordError("Password should contain at least one number")
        }
        else {
            setNewPasswordError("")
        }
    }


    const changePassword = async () => {
        if(newPassword && !newPasswordError && user.password) {
            await axios.put(`/settings/password/${user._id}`, {
                oldPassword,
                newPassword
            }).then((u) => {
                setUser(u.data)
                setOldPassword("")
                setNewPassword("")
                setActivePassword(false)
                setActiveNewPassword(false)
                setActiveOldPassword(false)
                setShowNewPassword(false)
                setShowOldPassword(false)
                setPasswordError("")
            }).catch((e) => setPasswordError(e.response.data))
        }
    }

    const onEnterPassword = (e) => {

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
                    <h1 className={mailError && activeMail ? `${s.error} ${s.active}` : s.error}>{mailError}</h1>
                    <h1 className={activeMail ? `${s.inputName} ${s.active}` : s.inputName}>email</h1>
                </div>
                <div className={s.box} >   
                    <div className={s.passwordInputs}>
                        <div style={{display: 'flex'}} className={s.passwordInputs__item} onClick={() => {setActivePassword(true); setActiveOldPassword(true); setActiveNewPassword(false); oldInputPassword.current.focus()}}>
                            <div className={activeOldPassword ? `${s.edit} ${s.active}` : s.edit} >
                                <div className={s.target} >
                                    <h1 className={activePassword ? `${s.inputValue} ${s.active}` : s.inputValue}>. . . . .</h1>
                                    <input value={oldPassword} ref={oldInputPassword} onChange={(e) => setOldPassword(e.target.value) } type={showOldPassword ? "text" : "password"} className={activePassword ? `${s.input} ${s.active}` : s.input}/>
                                </div>
                                {activePassword ? <h1 className={s.showButton} onClick={() => setShowOldPassword(!showOldPassword)}>{showOldPassword ? 'hide' : 'show'}</h1> : null}
                            </div>
                            <h1 className={activeOldPassword ? `${s.inputName} ${s.active}` : s.inputName}>{activePassword ? 'old password' : 'password'}</h1>
                        </div>
                        <div className={activePassword ? `${s.passwordInputs__item} ${s.active}` :  s.passwordInputs__item}  onClick={() => {setActiveNewPassword(true); setActiveOldPassword(false); newInputPassword.current.focus()}}>
                            <div className={activeNewPassword ? `${s.edit} ${s.active}` : s.edit} >
                                <div className={s.target}>
                                    <input ref={newInputPassword} value={newPassword} onChange={(e) => passwordHandler(e.target.value) } type={showNewPassword ? "text" : "password"} className={activePassword ? `${s.input} ${s.active}` : s.input}/>
                                </div>
                                {activePassword ? <h1 className={s.showButton} onClick={() => setShowNewPassword(!showNewPassword)}>{showNewPassword ? 'hide' : 'show'}</h1> : null}
                            </div>
                            <h1 className={activeNewPassword ? `${s.inputName} ${s.active}` : s.inputName}>new password</h1>
                        </div>
                    </div>
                    <h1 className={activePassword && (passwordError || newPasswordError) && newPassword ? `${s.error} ${s.active}` : s.error}>{passwordError || newPasswordError}</h1>
                    <div className={activePassword ? `${s.buttons} ${s.active}` : s.buttons}>
                        <button onClick={() => changePassword()} className={s.saveButton}>save</button>
                        <button onClick={() => {
                                setActivePassword(false); 
                                setOldPassword(""); 
                                setNewPassword("");
                                setActiveNewPassword(false)
                                setActiveOldPassword(false)
                            }}
                            className={s.cancelButton}
                        >
                            cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccountSettings;