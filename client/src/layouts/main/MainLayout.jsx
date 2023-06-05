import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import s from './mainLayout.module.css'
import { useState } from "react";
import SignUpOrLogIn from "../../components/signUpOrLogIn/SignUpOrLogIn";


const MainLayout = () => {
    
    const [activeLoginModal, setActiveLoginModal] = useState(false)

    return (
        <div className={!activeLoginModal ? s.page : `${s.active} ${s.open}`}>
            <Sidebar setActive={setActiveLoginModal}/>
            <div className={s.main}>
                <Outlet />
                <SignUpOrLogIn active={activeLoginModal} setActive={setActiveLoginModal}/>
            </div>
        </div>
    );
};

export default MainLayout;