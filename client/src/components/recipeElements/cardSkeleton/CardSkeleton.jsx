import Skeleton from 'react-loading-skeleton';
import s from './cardSkeleton.module.css'

const CardSkeleton = () => {
    return (
        <div className={s.cardSkeleton}>
            <div className={s.details}>
                <div className={s.header}>
                    <Skeleton height={96} />
                    <Skeleton height={20} />
                    <Skeleton height={36} />
                </div>
                <div className={s.stats}>
                    <Skeleton height={52}/>
                    <Skeleton height={72}/>
                    <Skeleton height={42}/>
                </div>
            </div>
            <Skeleton width={480} height={480}/>
        </div>
    );
};

export default CardSkeleton;