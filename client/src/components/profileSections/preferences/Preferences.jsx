import s from './preferences.module.css'

const Preferences = ({user}) => {
    return (
        <div>
            {user?.name}
        </div>
    );
};

export default Preferences;