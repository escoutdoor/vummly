import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import s from './mainLayout.module.css'
import { useEffect, useState } from "react";
import Main from "../../components/signUpOrLogIn/main/Main";
import axios from "axios";

const MainLayout = () => {
    const [activeLoginModal, setActiveLoginModal] = useState(false)
    useEffect(() => {
        document.body.style.overflow = activeLoginModal ? 'hidden' : 'visible'
    }, [activeLoginModal])
    const [loggedInUser, setLoggedInUser] = useState({})
    const [notLoggedInUser, setNotLoggedInUser] = useState({})

    useEffect(() => {
        const fetchme = async () => {
            await axios.get(`/user/getUser/${JSON.parse(localStorage.getItem('_auth'))}`).then((me) => {
                setLoggedInUser(me.data)
            })
        }
        localStorage.getItem('_auth') && fetchme()
    }, [notLoggedInUser])
    
    return (
        <div>
            <Sidebar setActive={setActiveLoginModal} activeLoginModal={activeLoginModal}/>
            <div className={s.main}>
                <Outlet context={[loggedInUser, setNotLoggedInUser, setActiveLoginModal]}/>
                <Main active={activeLoginModal} setActive={setActiveLoginModal}/>
            </div>
        </div>
    );
};

export default MainLayout;