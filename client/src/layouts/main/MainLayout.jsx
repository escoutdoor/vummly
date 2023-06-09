import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import s from './mainLayout.module.css'
import { useEffect, useState } from "react";
import Main from "../../components/signUpOrLogIn/main/Main";
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice';
import axios from "axios";

const MainLayout = () => {
    const [activeLoginModal, setActiveLoginModal] = useState(false)
    const [user, setUser] = useState({})
    useEffect(() => {
        document.body.style.overflow = activeLoginModal ? 'hidden' : 'visible'
    }, [activeLoginModal])

    useEffect(() => {
        const getUser = async () => {
            await axios.get(`/user/getUser/${JSON.parse(localStorage.getItem('_auth'))}`).then((user) => {
                setUser(user.data)
            })
        }
        JSON.parse(localStorage.getItem('_auth')) && getUser()
    }, [activeLoginModal])

    return (
        <div>
            <Sidebar setActive={setActiveLoginModal} user={user._id ? user : null}/>
            <div className={s.main}>
                <Outlet />
                <Main active={activeLoginModal} setActive={setActiveLoginModal}/>
            </div>
        </div>
    );
};

export default MainLayout;