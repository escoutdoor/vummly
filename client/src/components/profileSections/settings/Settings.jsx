import s from './settings.module.css'

const Settings = ({user}) => {
    return (
        <div>
            {user?.name}
        </div>
    );
};

export default Settings;