import { Outlet } from "react-router-dom";
import SuppFooter from "../../components/suppFooter/SuppFooter";
import SuppNavbar from "../../components/suppNavbar/SuppNavbar";
import s from './supportLayout.module.css'


const SupportLayout = () => {
    return (
        <>
            <SuppNavbar />
                <div className={s.main}>
                    <Outlet/>
                </div>
            <SuppFooter />
        </>
    );
};

export default SupportLayout;