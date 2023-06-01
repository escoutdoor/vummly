import s from './titleAndDesc.module.css'

const TitleAndDesc = ({items, visibility, setActive, active}) => {

    console.log(active)

    return (
        <div className={s.box} style={{display: visibility ? 'block' : 'none'}}>
            <div className={s.content}>
                {items.map((item, index) => (
                    <div onClick={() => setActive(item.title)} className={active !== item.title ? s.item : `${s.item} ${s.active}`} key={item.id}>
                        <h3 className={s.title}>{item.title}</h3>
                        <span className={s.desc}>{item.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleAndDesc;